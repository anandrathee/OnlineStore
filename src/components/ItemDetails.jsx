import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../Context/Context';

const ItemDetails = () => {
 const {productData, setProductData} = useContext(ProductContext);
 console.log('Product Data:', productData);

    const { category, title } = useParams();  // 'name' ko 'id' kar do for clarity
  // console.log('Product ID:', id);

  return (
    <div className='w-full h-screen px-32 flex items-center justify-center gap-10'>
    <div className="itemsImage w-82">
      <img className='w-full h-full hover:scale-110 transition-all duration-300' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="" />
    </div>
    <div className="itemDetails w-96">
      <h1 className='text-3xl font-semibold mb-4'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
      <p className='text-sm text-gray-600 mb-2'>Category:</p>
      <p className='text-xl font-bold mb-2'>$109.95</p>
      <p className='text-sm text-gray-700 mb-4'>Description: Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
      <button className='w-32 h-10 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all font-semibold'>Add to Cart</button>

    </div>
    </div>
  )
}

export default ItemDetails