declare module 'klaro' {
  export interface KlaroConfig {
    elementID?: string;
    storageMethod?: 'cookie' | 'localStorage';
    storageName?: string;
    cookieName?: string;
    cookieDomain?: string;
    cookieExpiresAfterDays?: number;
    htmlTexts?: boolean;
    default?: boolean;
    mustConsent?: boolean;
    acceptAll?: boolean;
    hideDeclineAll?: boolean;
    hideLearnMore?: boolean;
    noticeAsModal?: boolean;
    disablePoweredBy?: boolean;
    privacyPolicy?: string;
    lang?: string;
    services?: KlaroService[];
    purposes?: KlaroPurpose[];
    translations?: Record<string, Record<string, unknown>>;
    styling?: {
      theme?: string[];
    };
    callbacks?: {
      onInitialize?: (consent: Record<string, boolean>) => void;
      onConfirm?: (consent: Record<string, boolean>) => void;
      onNoticeClosed?: () => void;
    };
  }

  export interface KlaroService {
    name: string;
    default?: boolean;
    title?: string;
    description?: string;
    purposes?: string[];
    cookies?: (string | RegExp | { name: string; path?: string; domain?: string })[];
    required?: boolean;
    optOut?: boolean;
    onlyOnce?: boolean;
    contextualConsentOnly?: boolean;
    onAccept?: () => void;
    onDecline?: () => void;
    callback?: (consent: boolean, service: KlaroService) => void;
  }

  export interface KlaroPurpose {
    name: string;
    title?: string;
    description?: string;
  }

  export function initialize(config: KlaroConfig): void;
  export function show(config?: KlaroConfig): void;
  export function hide(): void;
  export function getManager(): { getConsent(name: string): boolean; updateConsent(name: string, value: boolean): void };
}