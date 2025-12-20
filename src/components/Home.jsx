import React, { useContext } from 'react'
import Card from '../CompoentsPartials/Card'
import { ProductContext } from '../Context/Context'
import CategoryLIst from '../CompoentsPartials/CategoryLIst'

const Home = () => {
 const {filteredProducts} = useContext(ProductContext)
  return (
    <div className='w-full px-32 h-auto flex flex-col mt-10'>
      <CategoryLIst/>
    <div className='flex flex-wrap gap-5 items-center justify-center mt-5'>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item,index)=>(
          <Card key={item.id} values={item} index={index}/>
        ))
      ):(
        <p>Loading</p>
      )}
    </div>

      </div>
  )
}

export default Home