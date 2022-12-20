export {};

declare global {
  interface Item {
    id: number;
    name: string;
    quantity: number;
    price: number;
    total: number;
  }

  interface Address {
    street: string;
    city: string;
    postCode: string;
    country: string;
  }

  interface InvoiceDataType {
    id: string;
    createdAt: string;
    paymentDue: string;
    description: string;
    paymentTerms: number;
    clientName: string;
    clientEmail: string;
    status: "paid" | "pending" | "draft";
    senderAddress: Address;
    clientAddress: Address;
    items: Item[];
    total: number;
  }
}
