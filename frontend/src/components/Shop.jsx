import React, { useEffect, useState } from 'react'
import Card from './Card';


const Shop = () => {

  const [products,setProducts] = useState([])
    
  
  const fetchProduct =async () => {
      const response = await fetch("http://localhost:3000/shop")
      const data = await response.json()
      console.log("shop data",data.product)
      setProducts(data.product)
  }

  useEffect(()=>{
      fetchProduct()
  },[])
  
  return (
    <div className="w-full px-6 py-10 lg:px-30">
          <h2 className="text-center text-3xl font-bold mb-8">All Products</h2>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((item, i) => (
              <Card key={i} image={item.image} name={item.name} price={item.price} />
            ))}
          </div>
        </div>
  )
}

export default Shop