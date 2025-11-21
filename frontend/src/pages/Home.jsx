import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import LatestProducts from '../components/LatestProducts'
import BestSelling from '../components/BestSelling'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <LatestProducts />
        <BestSelling />
    </div>
  )
}

export default Home