import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import invoiceData from "../../data.json";
export interface InVoiceState {
  lists: InvoiceDataType[];
  editableInvoice: InvoiceDataType | null;
  editing: boolean;
}

const initialState: InVoiceState = {
  lists: invoiceData,
  editableInvoice: null,
  editing: false,
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    createInvoice: (state, action: PayloadAction<InvoiceDataType>) => {
      state.lists = [...state.lists, action.payload];
    },
    populateEditData: (state, action: PayloadAction<InvoiceDataType>) => {
      state.editableInvoice = action.payload;
      state.editing = true;
    },
    updateInvoice: (state, action: PayloadAction<InvoiceDataType>) => {
      const index = state.lists.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index > -1) {
        state.lists.splice(index, 1, action.payload);
      } else {
        state.lists = [...state.lists, action.payload];
      }
      state.lists = state.lists;
      state.editing = false;
    },
    deleteInvoice: (state, action: PayloadAction<string>) => {
      state.lists = state.lists.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createInvoice, populateEditData, updateInvoice, deleteInvoice } =
  invoiceSlice.actions;

export default invoiceSlice.reducer;
