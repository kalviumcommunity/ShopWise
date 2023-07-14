import React from 'react'
import "./Products.css"
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'
import Cart from '../Cart'

const Products = () => {
  return (
    <>
      <section className='card-container'>
       <Cart/>
       <Cart/>
       <Cart/>
       <Cart/>
       <Cart/>
       <Cart/>
       <Cart/>
       <Cart/>
      </section>
    </>
  )
}

export default Products
