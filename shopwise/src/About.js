import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import {useProductContext} from './context/ProductContext'

const About = () => {

  const myname=useProductContext();


  const data={
    name:"ShowWise Ecommerce"
  }
  return <>
  
  <HeroSection myData={data}/>;
  </>
  
}

export default About
