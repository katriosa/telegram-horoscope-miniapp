export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initDataUnsafe?: {
          user?: {
            language_code?: string;
          };
        };
        version: string;
        ready: () => void;
        BackButton: {
          show: () => void;
          hide: () => void;
          onClick: (callback: () => void) => void;
          offClick: (callback: () => void) => void;
        };
        onEvent: (eventName: string, callback: () => void) => void;
        offEvent: (eventName: string, callback: () => void) => void;
      };
    };
  }
}
