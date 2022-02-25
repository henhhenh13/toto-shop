import { configureStore } from "@reduxjs/toolkit";
import totoshopReducer from '../features/totoshopSlice'
const store = configureStore({
    reducer: {
        totoshop: totoshopReducer
    },
})

export default store;