/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    user?: {
      id: number;
      email: string;
      tipo: string;
      ruta: string;
      rol?: string;
      firebaseUid?: string | null;
    };
  }
}

declare module "sanitize-html";