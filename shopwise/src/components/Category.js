import React from 'react'
import Nav from '../CategoryNavigation/Nav'
import Products from '../CategoryProducts/Products'
import Recommended from '../CategoryRecommented/Recommended'
import Sidebar from '../CategorySidebar/Sidebar'

const Category = () => {
  return (
    <>
      <Sidebar/>
      <Nav/>
      <Recommended/>
      <Products/>
      

    </>
  )
}

export default Category
