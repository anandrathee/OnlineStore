import React from 'react'

const Card = ({values, index, handleBtnClick}) => {
  const {image, id, title, price, rating, description, category, isAdded} = values
  return (
    <div className='w-72 h-96 flex flex-col p-4 rounded-lg border shadow-md hover:shadow-xl transition-all'>
      <div className="img w-full h-52 mb-4 rounded-lg overflow-hidden">
        <img className='w-full h-full object-contain' src={image} alt={title} />
      </div>
      <div className="details h-40 flex flex-col flex-1 justify-between gap-2">
        <h2 className='line-clamp-1 text-lg font-semibold text-gray-900 leading-tight'>{title}</h2>
        <p className='text-sm text-gray-500 capitalize'>{category}</p>
        <p className='text-xl font-bold text-gray-900'>${price}</p>
        <p className='text-sm text-gray-600'>⭐ {rating.rate} ({rating.count} reviews)</p>
        <button onClick={()=>handleBtnClick(id)} className={`w-full h-10 rounded font-semibold transition-all ${
          isAdded 
            ? 'bg-green-500 hover:bg-green-600 text-white' 
            : 'bg-orange-500 hover:bg-orange-600 text-white'
        }`}>
          {isAdded ? 'Added ✓' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}

export default Card