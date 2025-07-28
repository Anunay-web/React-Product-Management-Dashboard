import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Components/Home'
import Details from './Components/Details'
import AddProduct from './Components/AddProduct'

function App() {
 const {search,pathname} =  useLocation()
 console.log(search,pathname);
 
  return (
    <div className=''>
      {(pathname!="/" || search.lenght>0) && ( <Link className='absolute text-2xl left-[18%] top-[2%] text-red-300 border px-2' to="/">Home</Link>) }
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/create' element={<AddProduct />} />
      </Routes>
      
      
    </div>
  )
}

export default App