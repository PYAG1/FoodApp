import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types";

import { CartState } from "../types";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    OrderHistory: [],
    CurrentCart: [],
    totalQuantity: 0,
    showCart: false,
    currentUser:""
  } as CartState, // Provide initial state type
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      const newItem = action.payload;
      const id = newItem?.id;
      const existingItem = state.CurrentCart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.totalprice += newItem?.price;
        existingItem.quantity++;
      } else {
        state.CurrentCart.push({
          id: newItem.id,
          totalprice: newItem.price,
          quantity: 1,
          price: newItem.price,
          name: newItem.name,
          img: newItem.img,
        });
        state.totalQuantity++;
      }
    },
    deleteFromCart: (state, action: PayloadAction<any>) => {
      const id = action.payload;
      // finding the item with id === id
      const existingitem = state.CurrentCart.find((item) => id === item.id);

      if (existingitem) {
        // clearing item from cart if quantity === 1
        if (existingitem.quantity === 1) {
          state.CurrentCart = state.CurrentCart.filter(
            (item) => item.id !== id
          );
          state.totalQuantity--;
        } else {
          // reducing the item quantity
          existingitem.quantity--;
          existingitem.totalprice -= existingitem?.price;
        }
      }
    },
    ToggleCart: (state) => {
      state.showCart = !state.showCart;
    },
    ClearCart: (state) => {
      state.CurrentCart = [];
      state.totalQuantity = 0;
    },
    RemoveFromCart: (state, action: PayloadAction<any>) => {
      const id = action.payload;
      state.CurrentCart = state.CurrentCart.filter((item) => item.id !== id);
      state.totalQuantity--;
    },
    setCurrentUser:(state,action: PayloadAction<any>)=>{
      state.currentUser = action.payload
    }
  },
});

export const {
  addToCart,
  ToggleCart,
  ClearCart,
  deleteFromCart,
  RemoveFromCart,
  setCurrentUser
} = cartSlice.actions;
