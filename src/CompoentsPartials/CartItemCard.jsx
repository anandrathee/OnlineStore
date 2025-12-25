import React from 'react'

const CartItemCard = ({item}) => {
  const {title, image, price} = item;
  return (
    <div className='w-full h-20 flex items-center justify-between gap-4 p-2'>
      <div className="itemsDetails flex items-center gap-4">
      <div className="img w-20 h-20">
        <img className='w-full h-full' src={image} alt="" />
      </div>
      <div className="details flex flex-col gap-2">
        <h1 className='text-sm line-clamp-1 w-38'>{title}</h1>
        <p className='text-sm font-semibold'>Price: ${price}</p>
      </div>
      </div>
      <div className='bg-orange-600 flex items-center justify-between  text-white ronded w-18 h-10 rounded-md text-xm '>
      <button className='w-full text-xl font-semibold h-full cursor-pointer mr-1 '>-</button>
      <p className=' font-semibold'>10</p>
      <button className='w-full text-xl font-semibold h-full cursor-pointer ml-1 '>+</button>
      </div>
    </div>
  )
}

export default CartItemCard