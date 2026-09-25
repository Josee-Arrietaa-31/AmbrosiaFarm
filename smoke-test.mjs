import { chromium } from 'playwright';

const browser = await chromium.launch({ args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
await page.screenshot({ path: 'C:\\Users\\josea\\AppData\\Local\\Temp\\claude\\c--Users-josea-OneDrive---Estudiantes-ITCR-Documentos-GitHub-proyectoParking-AmbrosiaFarm\\c87ab2ea-f575-4c45-8edf-8d51c95fa5ca\\scratchpad\\logo-desktop.png', clip: { x: 0, y: 0, width: 500, height: 100 } });

const mobile = await browser.newPage({ viewport: { width: 390, height: 700 } });
await mobile.goto('http://localhost:5173', { waitUntil: 'networkidle' });
await mobile.waitForTimeout(400);
await mobile.screenshot({ path: 'C:\\Users\\josea\\AppData\\Local\\Temp\\claude\\c--Users-josea-OneDrive---Estudiantes-ITCR-Documentos-GitHub-proyectoParking-AmbrosiaFarm\\c87ab2ea-f575-4c45-8edf-8d51c95fa5ca\\scratchpad\\logo-mobile.png', clip: { x: 0, y: 0, width: 390, height: 100 } });

await browser.close();
