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
      nombreEvento?: string | null;
      fechaEvento?: Date | null;
      addonMesas?: boolean;
      addonRecordatorios?: boolean;
    };
  }
}

declare module "sanitize-html";