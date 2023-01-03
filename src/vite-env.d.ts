/// <reference types="vite/client" />

export interface Versions {
  node: () => Promise<String>;
}

declare global {
  interface Window {
    versions: Versions;
  }
}
