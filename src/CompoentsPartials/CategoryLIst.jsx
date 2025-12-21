import React, { useContext } from "react";
import { ProductContext } from "../Context/Context";

const CategoryLIst = () => {
  const { categorySelected, setCategorySelected } = useContext(ProductContext);
  //  console.log("cat:",categorySelected);

  const handleCategoryChange = (e) => {
    // console.log(e.target.value);
    setCategorySelected(e.target.value);
  };
  return (
    <div className="w-full h-20 flex items-center justify-between">
      <h3 className="font-semibold text-xl capitalize">{categorySelected} items</h3>
      <select
        value={categorySelected}
        onChange={handleCategoryChange}
        className="p-2 rounded border bg-orange-500 hover:bg-orange-600 transition-all text-white outline-none"
      >
        <option value="all">All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </div>
  );
};

export default CategoryLIst;
