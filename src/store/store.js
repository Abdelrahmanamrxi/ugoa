import { configureStore } from "@reduxjs/toolkit";
import HeaderReducer from './HeaderSlice';
const store =configureStore({
    reducer:{
        Header:HeaderReducer
    },
    getDefaultMiddleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
})
export default store;
