export {};

declare global {
  interface Window {
    api: {
      saveBill: (data: any) => Promise<any>;
    };
  }
}
