import React from 'react'
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";

function HomeLayout(props) {
  return (
    <div>
      <HomeHeader/>
        {props.children}
      <HomeFooter/>
      </div>
  )
}

export default HomeLayout
