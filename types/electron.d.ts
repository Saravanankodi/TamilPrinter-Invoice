export {};

declare global {
  interface Window {
    api: {
      saveBill: (data: any) => Promise<any>;
      getBills: () => Promise<any[]>;
      getBillDetails: (id: number) => Promise<any>;
      exportBills?: () => void;
      getCustomers: () => Promise<any[]>;
      addCustomer: (customer: any) => Promise<{ id: number }>;
    };
  }
}
