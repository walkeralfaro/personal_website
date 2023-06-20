/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  CONTACT_API:string;
  CV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}