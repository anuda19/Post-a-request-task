import React from 'react'
import Banner from './component/banner/Banner'
import Category from './component/category/Category'
import Navbar from './component/navbar/Navbar'
import LocationDate from './component/locationDate/LocationDate'
import ProjectBudget from './component/projectBudget/ProjectBudget'
import Footer from './component/footer/Footer'
import './App.css'

const App = ()=>{

  return(
    <>
    <Navbar />
      <Banner />
      <Category />
      <LocationDate />
      <ProjectBudget/>
      <Footer/>
    </>
  )
}

export default App;
