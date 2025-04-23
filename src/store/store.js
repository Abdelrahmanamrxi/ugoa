import { configureStore } from "@reduxjs/toolkit";
import HeaderReducer from './HeaderSlice';
import formDataReducer from './FormSlice'
const store =configureStore({
    reducer:{
        Header:HeaderReducer,
        formData:formDataReducer
    },
    getDefaultMiddleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
})

export default store;
