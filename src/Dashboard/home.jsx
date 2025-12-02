import React from 'react'
import Navbar from './navbar'
import Category from '../Category/category';
import Banner from '../Banner/banner';
import BestDealForMobile from '../BestDeal/BestDealForMobile';
import "./Home.css";
const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      
      <Banner/>
      <Category/>
      <BestDealForMobile/>
    </div>
  )
}

export default Home;
