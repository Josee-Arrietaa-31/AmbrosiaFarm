<?php
// Recibe el formulario de contacto del sitio (JSON) y lo reenvía por correo.
// Vive en public/ para que Vite lo copie a dist/ y se suba al cPanel junto con el sitio.

const DESTINO = 'administracion@phnorte.com';
// El remitente debe ser del dominio del hosting para pasar SPF/DKIM; las respuestas van al visitante (Reply-To).
const REMITENTE = 'no-reply@ambrosiafarmcr.com';
const ORIGENES = ['https://ambrosiafarmcr.com', 'https://www.ambrosiafarmcr.com'];
const MAX_POR_HORA = 5;

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function responder(int $codigo, string $mensaje): void {
    http_response_code($codigo);
    echo json_encode(['ok' => $codigo === 200, 'message' => $mensaje], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    responder(405, 'Método no permitido.');
}

$origen = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origen !== '' && !in_array($origen, ORIGENES, true)) {
    responder(403, 'Origen no permitido.');
}

$datos = json_decode(file_get_contents('php://input', false, null, 0, 20000), true);
if (!is_array($datos)) {
    responder(400, 'Solicitud inválida.');
}

// Campo trampa: las personas no lo ven; si viene lleno es un bot. Se responde "ok" para no darle pistas.
if (!empty($datos['sitio'])) {
    responder(200, 'Mensaje enviado.');
}

$limpiar = fn($v, int $max) => mb_substr(trim(str_replace(["\r", "\n"], ' ', (string) ($v ?? ''))), 0, $max);
$nombre = $limpiar($datos['nombre'] ?? '', 120);
$correo = $limpiar($datos['correo'] ?? '', 160);
$telefono = $limpiar($datos['telefono'] ?? '', 40);
$mensaje = mb_substr(trim((string) ($datos['mensaje'] ?? '')), 0, 5000);

if ($nombre === '' || mb_strlen($mensaje) < 10 || !filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    responder(422, 'Revise los datos del formulario.');
}

// Límite simple por IP para frenar abusos.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'desconocida';
$registro = sys_get_temp_dir() . '/ambrosia-contacto-' . md5($ip);
$ahora = time();
$envios = array_filter(
    is_file($registro) ? (array) json_decode((string) file_get_contents($registro), true) : [],
    fn($t) => is_int($t) && $t > $ahora - 3600
);
if (count($envios) >= MAX_POR_HORA) {
    responder(429, 'Ha enviado demasiados mensajes. Intente de nuevo más tarde.');
}

$asunto = '=?UTF-8?B?' . base64_encode("Nuevo mensaje del sitio web de $nombre") . '?=';
$cuerpo = "Nuevo mensaje desde el formulario de ambrosiafarmcr.com\n\n"
    . "Nombre: $nombre\n"
    . "Correo: $correo\n"
    . 'Teléfono: ' . ($telefono !== '' ? $telefono : '(no indicado)') . "\n\n"
    . "Mensaje:\n$mensaje\n";
$cabeceras = implode("\r\n", [
    'From: Sitio web Ambrosía Fresh <' . REMITENTE . '>',
    "Reply-To: $correo",
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

if (!mail(DESTINO, $asunto, $cuerpo, $cabeceras, '-f' . REMITENTE)) {
    responder(500, 'El servidor no pudo enviar el correo.');
}

$envios[] = $ahora;
@file_put_contents($registro, json_encode(array_values($envios)));
responder(200, 'Mensaje enviado.');
