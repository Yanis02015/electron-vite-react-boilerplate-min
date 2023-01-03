import path from "path";

export function resolveHtmlPath(htmlFileName: string) {
  if (process.env.VITE_DEV_SERVER_URL) return process.env.VITE_DEV_SERVER_URL;

  return `file://${path.resolve(__dirname, "../dist/", htmlFileName)}`;
}
