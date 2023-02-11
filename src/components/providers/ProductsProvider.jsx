import React, { useContext, useReducer } from "react";
import { productsData } from "../../db/products";
const ProductsContext = React.createContext(); // state
const ProductsContextDispatch = React.createContext(); // setState

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const copyProducts = [...state];
      const selectedProduct = copyProducts.find((p) => p.id === action.id);
      selectedProduct.quantity++;
      return copyProducts;
    }
    case "edit": {
      const copyProducts = [...state];
      const selectedProduct = copyProducts.find((p) => p.id === action.id);
      selectedProduct.title = action.event.target.value;
      return copyProducts;
    }
    case "decrement": {
      const copyProducts = [...state];
      const selectProduct = copyProducts.find((p) => p.id === action.id);
      if (selectProduct.quantity > 1) {
        selectProduct.quantity--;
      } else {
        copyProducts.splice(copyProducts.indexOf(selectProduct), 1);
      }

      return copyProducts;
    }
    case "remove": {
      const filterProduct = state.filter((p) => p.id !== action.id);
      return filterProduct;
    }

    case "filter": {
      console.log(action.selectedOption.value);
      if (action.selectedOption.value === "") {
        return productsData;
      } else {
        const filteredProduct = productsData.filter(
          (p) => p.availableSizes.indexOf(action.selectedOption.value) >= 0
        );
        console.log(filteredProduct);
        return filteredProduct;
      }
    }

    case "sort": {
      const products = [...state];
      if (action.selectedOption.value === "highest") {
        const sortHighest = products.sort((a, b) => b.price - a.price);
        return sortHighest;
      } else {
        const sortLowest = products.sort((a, b) => a.price - b.price);
        return sortLowest;
      }
    }

    case "search": {
      const searchedProduct = state.filter((p) =>
        p.title.toLowerCase().includes(action.event.target.value.toLowerCase())
      );
      return searchedProduct;
    }

    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);
  return (
    <ProductsContext.Provider value={products}>
      <ProductsContextDispatch.Provider value={dispatch}>
        {children}
      </ProductsContextDispatch.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProduct = () => useContext(ProductsContext);
export const useProductAction = () => {
  return useContext(ProductsContextDispatch);
}; // setState
