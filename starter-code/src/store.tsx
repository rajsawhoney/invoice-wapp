import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/apps";
import invoiceReducer from "./slices/invoice";

export const store = configureStore({
  reducer: {
    apps: appReducer,
    invoices: invoiceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
