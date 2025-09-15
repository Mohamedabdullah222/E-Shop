import React from 'react'
import Banner from './Banner'
import Products from './Products'
import GetStart from './GetStart'

const Home = () => {
  return (
    <div>
        
      <Banner />
<div className="relative z-20 mt-[-150px]">
  <Products />
</div> 
<GetStart />
   </div>
  )
}

export default Home
