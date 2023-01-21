import React from 'react'
import {Routes,Route} from "react-router-dom"
import Loginup from '../Account/Loginup'
import Cartdetails from '../Component/Cartdetails'
import Home from '../Component/Home'
import HomeDecore from '../Component/HomeDecore'
import SingalProducts from '../Component/SingalProducts'
const AllRoutes = () => {
    <link To="/">Home</link>
  return <>
 <Routes>
    <Route path='/'  element={<Home/>} />
    <Route path='/home'  element={<HomeDecore/>} />
    <Route path='/login' element={<Loginup/>} /> 
    <Route path='/singal/:user_id' element={<SingalProducts/>} />
    <Route path='/cart' element={<Cartdetails/>} />
 </Routes>
  </>
}

export default AllRoutes