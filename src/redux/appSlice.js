import { createSlice } from "@reduxjs/toolkit";


const initialState = {

  products: [],

  UserInfo: null,

};


export const appSlice = createSlice({
  name: "EShop",
  initialState,

  reducers: {

    addToCart : (state , action) => {
      const item = state.products.find((item) => item.id === action.payload.id)

      if (item) {
        item.quantity += action.payload.id
      } else {
        state.products.push(action.payload)
      }
    },

    increment : (state , action) => {
      const item =state.products.find((item) => item.id === action.payload)

      item.quantity++
    },

    decrement : (state , action) => {
      const item = state.products.find((item) => item.id === action.payload)

      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity --
      }
    },
    delateitem : (state , action) => {
      state.products = state.products.filter((item) => item.id !== action.payload)
    },
    delateall : (state) => {
      state.products = []
    },
    setUser: (state,action) => {
      state.UserInfo = action.payload
    },
    logOutUser : (state) => {
      state.UserInfo =null
    }
  },
});

export const { addToCart , increment , decrement , delateitem , delateall , setUser, logOutUser} = appSlice.actions

export default appSlice.reducer
