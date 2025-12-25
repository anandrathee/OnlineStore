import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../Context/Context';

const ItemDetails = () => {
  const navigate = useNavigate();
  const { productData, setProductData, setAddedProducts } = useContext(ProductContext);
  const { category, title } = useParams();

  const currentProduct = productData.find(
    item => item.category === category && item.title.toLowerCase().includes(title.toLowerCase())
  );

  const handleAddToCart = () => {
    if (currentProduct) {
      // Toggle isAdded in productData
      setProductData(prevData => 
        prevData.map(item => 
          item.id === currentProduct.id 
            ? { ...item, isAdded: !item.isAdded }  
            : item
        )
      );

      // Update addedProducts array
      if (currentProduct.isAdded) {
        // Remove from cart
        setAddedProducts(prev => prev.filter(item => item.id !== currentProduct.id));
      } else {
        // Add to cart
        setAddedProducts(prev => [...prev, currentProduct]);
      }
    }
  };

  if (!currentProduct) {
    return <div className='w-full px-32 py-20 text-center'>Product not found!</div>;
  }

  return (
    <div className='itemDetails w-full px-32 flex items-center justify-center gap-10 py-20'>
      <div className="itemsImage w-76 h-96">
        <img 
          className='w-full h-full object-contain hover:scale-110 transition-all duration-300' 
          src={currentProduct.image} 
          alt={currentProduct.title} 
        />
      </div>
      
      <div className="itemDetails w-96 flex flex-col items-start justify-center">
        <h1 className='text-3xl font-semibold mb-4'>{currentProduct.title}</h1>
        <p className='text-sm text-gray-600 mb-2'>Category: {currentProduct.category}</p>
        <p className='text-xl font-bold mb-2'>${currentProduct.price}</p>
        <p className='text-sm text-gray-700 mb-4 line-clamp-4'>{currentProduct.description}</p>
        
        <div className="buttons flex gap-4">
          <button 
            onClick={handleAddToCart}
            className={`w-32 h-10 text-white rounded-md transition-all font-semibold ${
              currentProduct.isAdded 
                ? 'bg-green-500 hover:bg-green-600' 
                : 'bg-orange-500 hover:bg-orange-600'
            }`}
          >
            {currentProduct.isAdded ? 'Remove' : 'Add to Cart'}
          </button>
          
          <button 
            onClick={() => navigate(-1)} 
            className='w-32 h-10 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-all font-semibold'
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
