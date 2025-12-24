import React, { createContext, useEffect, useMemo, useState } from "react";
import axios from "../utils/axios";

export const ProductContext = createContext();

const Context = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [categorySelected, setCategorySelected] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [addedProducts, setAddedProducts] = useState([]);


  // get products from API
  const getProducts = () => {
    axios
      .get("/products")
      .then((res) => {
        const updatedData = res.data.map((item) => ({
          ...item,
          isAdded: false,
        }));
        setProductData(updatedData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

// useMemo for category filtering
  const filteredProducts = useMemo(() => {
    if (categorySelected === "all") {
      return productData;
    }
    return productData.filter((item) => item.category === categorySelected);
  }, [productData, categorySelected]);


// useMemo for search query filtering
  const searchQueryProducts = useMemo(()=>{
    if(!searchQuery.trim()){
      return filteredProducts;
    }
    return filteredProducts.filter((item)=>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )
  },[filteredProducts, searchQuery]);


// value object for context
  const value = {
    productData,
    setProductData,
    filteredProducts,
    categorySelected,
    setCategorySelected,
    searchQueryProducts,
    searchQuery,
    setSearchQuery,
    addedProducts,
    setAddedProducts,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default Context;
