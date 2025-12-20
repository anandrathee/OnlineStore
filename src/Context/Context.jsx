import React, { createContext, useEffect, useMemo, useState } from "react";
import axios from "../utils/axios";

export const ProductContext = createContext();

const Context = ({ children }) => {
  const [productData, setProductData] = useState([]);
  // const [filteredCategory, setFilteredCategory] = useState([]);
   const [allCategories, setAllCategories] = useState([]); 
  const [categorySelected, setCategorySelected] = useState("all");

  const getProducts = () => {
    axios
      .get("/products")
      .then((res) => {
        const updatedData = res.data.map((item) => ({ ...item, isAdded: false }));
        setProductData(updatedData);

        const categories = ["all", ...new Set(updatedData.map(item => item.category))];
        setAllCategories(categories);
      })
      .catch((err) => console.log(err));
  };


 
  useEffect(() => {
    getProducts();
    // getCategory();

  }, []);

  const filteredProducts = useMemo(() => {
    if (categorySelected === "all") {
      return productData;
    }
    return productData.filter((item) => item.category === categorySelected);
  }, [productData, categorySelected]);



  const value = {
    productData,
    setProductData,
    allCategories,
    filteredProducts,
    categorySelected,
    setCategorySelected,
    // filteredCategory,
    // setFilteredCategory,
  };


  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default Context;
