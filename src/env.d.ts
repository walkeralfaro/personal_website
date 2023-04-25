/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly EMAIL_USER: string;
  readonly EMAIL_PASS: string;
  readonly EMAIL_DIR: string;
  readonly SMTP_HOST: string;
  readonly SMTP_PORT: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}