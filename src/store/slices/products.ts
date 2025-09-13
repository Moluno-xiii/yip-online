import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Product {
  name: string;
  id: string;
  imageUrl: string;
  price: number;
}

interface ProductsSliceType {
  products: Product[];
}

const initialState: ProductsSliceType = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    deleteAllProducts: (state) => {
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct, deleteAllProducts } =
  productsSlice.actions;
export const selectProducts = (state: RootState) => state.products.products;

export default productsSlice.reducer;
export type { Product };
