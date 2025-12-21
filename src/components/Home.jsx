import React, { useContext } from "react";
import Card from "../CompoentsPartials/Card";
import { ProductContext } from "../Context/Context";
import CategoryLIst from "../CompoentsPartials/CategoryLIst";

const Home = () => {
  const { filteredProducts,searchQueryProducts  } = useContext(ProductContext);

  return (
    <div className="w-full px-32 h-auto flex flex-col mt-10">
      <CategoryLIst />
      <div className="flex flex-wrap gap-5 items-center justify-center mt-5">

        {searchQueryProducts.length === "" ? (
          filteredProducts.map((item,index)=>(
            <Card key={item.id} values={item} index={index} />
          ))
        ):(
          searchQueryProducts.map((item, index) => (
            <Card key={item.id} values={item} index={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
