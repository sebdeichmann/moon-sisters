import { copyFile, mkdir } from 'node:fs/promises';

const staticAppRoutes = ['retreat'];

await Promise.all(staticAppRoutes.map(async (route) => {
  const routeDirectory = new URL(`../dist/${route}/`, import.meta.url);
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(
    new URL('../dist/index.html', import.meta.url),
    new URL(`../dist/${route}/index.html`, import.meta.url),
  );
}));
