import React from 'react'
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";
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
