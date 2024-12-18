import React from 'react'
import HomeHeader from "./HomeHeader";
import { Footer } from '../Component/Footer';

function HomeLayout(props) {
  return (
    <div>
      <HomeHeader/>
        {props.children}
      <Footer />
      </div>
  )
}

export default HomeLayout
