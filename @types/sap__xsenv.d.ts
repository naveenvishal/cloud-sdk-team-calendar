declare module '@sap/xsenv' {
    export function loadEnv(): void;
  
    export function getServices<T>(serviceFilter: Record<string, { tag?: string; name?: string }>): T;
  }
  