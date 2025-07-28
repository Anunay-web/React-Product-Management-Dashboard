import React, { useContext, useEffect, useState } from 'react'
import NavBar from './NavBar'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../Utils/Context'
import Loader from './Loader'
import axios from '../Utils/axios'

function Home() {
  const [products] = useContext(ProductContext)
  const [filteredProducts, setfilteredProducts] = useState(null)
  const {search} = useLocation();
  const category = decodeURIComponent( search.split("=")[1])
  console.log(category);
 const getFilteredCategory = async ()=>{
  try {
    const {data} = await axios.get(`/products/category/${category}`)
    setfilteredProducts(data)
    
  } catch (error) {
    console.log(error);
    
  }
 }
 useEffect(()=>{
  if(!filteredProducts) setfilteredProducts(products)
  if(category != "undefined") {
   setfilteredProducts(products.filter(p=> p.category == category)) 
  }
 },[category,products])
  
  return filteredProducts ? (

    <div className='w-screen h-screen flex'>
    <NavBar />
    
      <div className='w-[85%] h-full p-10 flex gap-5 flex-wrap mt-8'>
        
        {filteredProducts.map((elem,index)=>{ 
          return  <Link key={index}  to={`/details/${elem.id}`} className='w-[15%] h-[30vh] shadow p-4 group flex justify-center items-center flex-col'>
        <div className='w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3  group-hover:scale-[1.1]'
         style={{ backgroundImage: `url(${elem.image})` }}>
        </div>
        <p className='group-hover:text-blue-300'>{elem.title}</p>
        </Link>
        })}
        
        </div>
      
      
      </div> 
    
    
  ) : ( <Loader/>
)}

export default Home