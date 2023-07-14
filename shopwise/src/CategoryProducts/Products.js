import React from 'react'
import "./Products.css"
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'


const Products = ({result}) => {
  return (
    <>
      <section className='card-container'>
       {result}
       {console.log(result)}
      </section>
    </>
  )
}

export default Products
