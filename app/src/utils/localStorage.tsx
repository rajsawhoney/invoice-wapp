const getItemsFromLocalStorage = () => {
  try {
    const items = localStorage.getItem("invoices");
    if (items) {
      return JSON.parse(items);
    } else {
      return [];
    }
  } catch (error) {
    console.log("Encountered an issue", error);
  }
};

const updateInvoiceStore = (invoices: InvoiceDataType[]) => {
  localStorage.setItem("invoices", JSON.stringify(invoices));
};

export { getItemsFromLocalStorage, updateInvoiceStore };
