import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../api/appApi";
import { PRODUCTS } from '../api/appKeys'

export const getProducts = createAsyncThunk('products/getProducts',
    async () => {
        const response = await axiosClient.get(PRODUCTS);
        return response.data
    }
)

export const getProduct = createAsyncThunk('products/getProduct',
    async (id) => {
        const response = await axiosClient.get(PRODUCTS, id);
        return response.data
    }
)


