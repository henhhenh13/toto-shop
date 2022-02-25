import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./totoshop.service";

export const totoshopSlice = createSlice({
    name: "totoshop",
    initialState: {
        dataProducts: [],
        isLoading: false,
        status: ""
    },
    reducers: {
    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.status = "loading..."
            state.isLoading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.dataProducts = action.payload;
            state.isLoading = false;
            state.status = "Ok";
        },
        [getProducts.rejected]: (state, action) => {
            state.isLoading = false;
            state.status = "Ok";
        }
    }
})

export default totoshopSlice.reducer;