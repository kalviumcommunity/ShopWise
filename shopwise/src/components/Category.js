import React, { useState } from 'react'
import Nav from '../CategoryNavigation/Nav'
import Products from '../CategoryProducts/Products'
import Recommended from '../CategoryRecommented/Recommended'
import Sidebar from '../CategorySidebar/Sidebar'
import products from '../db/data'
import Cart from '../Cart'


const Category = () => {

  const [selectedCategory,setSelectedCategory]=useState(null);

  const[query,setQuery]=useState("")

  const handleInputChange=event=>{
    setQuery(event.target.value)
  }

  const filteredItems=products.filter(product=>
    product.title.toLowerCase().indexOf(query.toLowerCase()!==-1)
  )

  const handleChange=event=>{
    setSelectedCategory(event.target.value);
  }

  const handleClick=event=>{
    setSelectedCategory(event.target.value);
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Cart
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }


  const result =filteredData(products,selectedCategory,query)
  console.log(result);

  



  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Nav query={query} handleChange={handleChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
    </>
  )
}

export default Category
