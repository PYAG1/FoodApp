import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";



export const makeStore = () => {
    return configureStore({
      reducer: {
        cart: cartSlice.reducer,
        // Add other reducers as needed
      },
    });
  };
  
  // Create the Redux store
  const store = makeStore();
  
  // Infer the type of makeStore
  export type AppStore = ReturnType<typeof makeStore>;
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<AppStore['getState']>;
  export type AppDispatch = typeof store.dispatch;