import React from 'react'
import TopProducts from '../product/TopProducts.jsx'

import ProductList from '../product/ProductList.jsx'



export default function Home() {
  return (
    <div className='p-5 space-y-5 pb-12'>


      <TopProducts />

      <ProductList />


    </div>
  )
}
