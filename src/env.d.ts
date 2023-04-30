/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  CONTACT_API:string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}