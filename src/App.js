import React, { useState } from "react";
import "./App.css";
import SearchBar from "./common/search/SearchBar";
import Filter from "./components/filter/Filter";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/product/ProductList";
import ProductsProvider, {
  useProduct,
  useProductAction,
} from "./components/providers/ProductsProvider";

const productData = [
  {
    id: "1",
    title: "React Course",
    price: "99$",
    quantity: 1,
  },
  {
    id: "2",
    title: "Node Course",
    price: "89$",
    quantity: 2,
  },
  {
    id: "3",
    title: "JS Course",
    price: "79$",
    quantity: 3,
  },
];

export const UserContext = React.createContext();
export const AccContext = React.createContext();

function App() {
  return (
    <ProductsProvider>
      <div className="container">
        <Navbar />

        <Filter />
        <ProductList />
      </div>
    </ProductsProvider>
  );
}

export default App;
