import { createSlice } from "@reduxjs/toolkit";

export const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const { productId } = action.payload;
      const item = state.find((item) => item.id === productId);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { productId } = action.payload;
      const item = state.find((item) => item.id === productId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          const index = state.findIndex((item) => item.id === productId);
          if (index !== -1) {
            state.splice(index, 1);
          }
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
