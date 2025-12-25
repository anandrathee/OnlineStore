import React, { useContext } from "react";
import Card from "../CompoentsPartials/Card";
import { ProductContext } from "../Context/Context";
import CategoryLIst from "../CompoentsPartials/CategoryLIst";

const Home = () => {
  const { filteredProducts, searchQueryProducts, setProductData, setAddedProducts } =
    useContext(ProductContext);

    // handle button click to add/remove from cart
  const handleBtnClick = (itemId) => {
    setProductData((prev) =>
      prev.map((item) => {
        if (item.id === itemId) {
          const updatedProduct = { ...item, isAdded: !item.isAdded };
          if(updatedProduct.isAdded){
            setAddedProducts((prevAdded)=> [...prevAdded, updatedProduct]);
          } else {
            setAddedProducts((prevAdded)=> prevAdded.filter((product) => product.id !== itemId));
          }
          return updatedProduct;
          
        } else {
          return item;
        }
      })
    );
  };

  

  return (
    <div className="w-full px-32 h-auto flex flex-col mt-10">
      <CategoryLIst />
      <div className="flex flex-wrap gap-5 items-center justify-center mt-5">
        {searchQueryProducts.length === 0
          ? filteredProducts.map((item, index) => (
              <Card
                key={item.id}
                values={item}
                index={index}
                handleBtnClick={handleBtnClick}
              />
            ))
          : searchQueryProducts.map((item, index) => (
              <Card
                key={item.id}
                values={item}
                index={index}
                handleBtnClick={handleBtnClick}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
