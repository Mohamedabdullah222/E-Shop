import React from 'react'
import { createRoutesFromElements, Route , createBrowserRouter, Outlet ,  RouterProvider} from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import Sign from './components/Sign'
import Register from './components/Register'
import { ProductsData } from './api/api'
import Forgot from './components/Forgot'
import Card from './components/Card'


const LayOut = () => {
  return(
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}



const App = () => {

  const router = 
    createBrowserRouter(createRoutesFromElements(
      <Route>
      <Route path='/' element={<LayOut />}>
      <Route index element={<Home />} loader={ProductsData}></Route>
      <Route path='/card' element={<Card />}></Route>
      <Route path='/forgot' element={<Forgot />}></Route>
      </Route>
      <Route path='/sign' element={<Sign />}></Route>
      <Route path='/register' element={<Register />}></Route>
      </Route>
    ))
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
