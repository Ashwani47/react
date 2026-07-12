import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './commponents/Header/Header'
import Footer from './commponents/Footer/Footer'

// step 1

function Root() {
  return (
    <>
        <Header/>
        {/* ab ye outlet ye ek templet ki tarah hai mtlb...hum ye root ko ek template bana rhe hai jaha pr header upper fix hai footer neeche fix hai bus beech ke components badalne wale hai ab kb kya aane wala hai wo pata thodi hai so uske liye hum ek <outle/> naam ka tag milta hai react rouuter dom ki taraf se uska use kr liya */}
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Root