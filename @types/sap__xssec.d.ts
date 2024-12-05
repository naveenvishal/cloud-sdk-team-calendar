declare module '@sap/xssec' {
    import { Strategy } from 'passport-strategy';
  
    // JWTStrategy interface extending Passport's Strategy
    export class JWTStrategy extends Strategy {
      constructor(xsuaaCredentials: any);
    }
  }
  