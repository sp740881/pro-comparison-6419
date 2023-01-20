import React from 'react'
import {Routes,Route} from "react-router-dom"
import Loginup from '../Account/Loginup'
import Home from '../Component/Home'
import HomeDecore from '../Component/HomeDecore'
const AllRoutes = () => {
    <link To="/">Home</link>
  return <>
 <Routes>
    <Route path='/'  element={<Home/>} />
    <Route path='/home'  element={<HomeDecore/>} />
    <Route path='/login' element={<Loginup/>} /> 
 </Routes>
  </>
}

export default AllRoutes