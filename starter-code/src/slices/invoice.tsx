import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getItemsFromLocalStorage,
  updateInvoiceStore,
} from "../utils/localStorage";
export interface InVoiceState {
  lists: InvoiceDataType[];
  filteredList: InvoiceDataType[];
  editableInvoice: InvoiceDataType | null;
  editing: boolean;
}

const localInvoices: InvoiceDataType[] = getItemsFromLocalStorage();

const initialState: InVoiceState = {
  lists: localInvoices,
  filteredList: localInvoices,
  editableInvoice: null,
  editing: false,
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    createInvoice: (state, action: PayloadAction<InvoiceDataType>) => {
      state.lists = [...state.lists, action.payload];
      state.filteredList = [...state.filteredList, action.payload];
      updateInvoiceStore(state.lists);
      toast("New invoice created.", {
        type: "success",
      });
    },
    filterByStatus: (state, action: PayloadAction<string>) => {
      if (!action.payload) state.filteredList = state.lists;
      else
        state.filteredList = state.lists.filter(
          (item) => item.status === action.payload
        );
    },
    populateEditData: (
      state,
      action: PayloadAction<{
        data: InvoiceDataType | null;
        status: boolean;
      }>
    ) => {
      state.editableInvoice = action.payload.data;
      state.editing = action.payload.status;
    },
    updateInvoice: (state, action: PayloadAction<InvoiceDataType>) => {
      const index = state.lists.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index > -1) {
        state.lists.splice(index, 1, action.payload);
        const index2 = state.filteredList.findIndex(
          (item) => item.id === action.payload.id
        );
        state.filteredList.splice(index2, 1, action.payload);
      } else {
        alert("Invoice id mis-match!!");
        toast("Invoice id mis-match!!", {
          type: "error",
        });
      }
      state.lists = state.lists;
      state.filteredList = state.filteredList;
      state.editing = false;
      updateInvoiceStore(state.lists);
      toast("Invoice updated successfully.", {
        type: "success",
      });
    },
    deleteInvoice: (state, action: PayloadAction<string>) => {
      state.lists = state.lists.filter((item) => item.id !== action.payload);
      state.filteredList = state.filteredList.filter(
        (item) => item.id !== action.payload
      );
      updateInvoiceStore(state.lists);
      toast("Invoice deleted successfully.", {
        type: "success",
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  createInvoice,
  populateEditData,
  filterByStatus,
  updateInvoice,
  deleteInvoice,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
