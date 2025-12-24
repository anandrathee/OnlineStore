import React from 'react'

const CartItemCard = () => {
  return (
    <div className='w-full h-20 flex items-center justify-between gap-4 p-2'>
      <div className="itemsDetails flex items-center gap-4">
      <div className="img w-20 h-20">
        <img className='w-full h-full' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/628c97e0-5ed4-425d-a667-1d3bfa6f0bde.png" alt="" />
      </div>
      <div className="details flex flex-col gap-2">
        <h1 className='text-sm'>Product Name</h1>
        <p className='text-sm font-semibold'>Price: $XX.XX</p>
      </div>
      </div>
      <button className='bg-orange-600 text-white ronded px-3 py-1 rounded-md text-xm text-center'>- 0 +</button>
    </div>
  )
}

export default CartItemCard