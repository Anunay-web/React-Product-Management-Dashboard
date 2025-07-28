import axios from '../Utils/axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loader from './Loader';
import { ProductContext } from '../Utils/Context';

function Details() {
  const navigate = useNavigate()
  const [products,setproducts] = useContext(ProductContext)
  const [product, setproduct] = useState(null)
  const {id} = useParams()
  console.log(id)
  // const getProduct = async ()=>{
  //   try {
  //     const {data} = await axios.get(`products/${id}`)
  //     setproduct(data);
      
      
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }
  useEffect(()=>{
    // getProduct()
    if(!product){
      setproduct(products.filter((p)=>p.id==id)[0])
    }
  },[])
  const deleteProductHandler = (id)=>{
    const deletedProduct = products.filter((p)=> p.id != id)
    setproducts(deletedProduct)
    localStorage.setItem("products", JSON.stringify(deletedProduct))
    navigate("/")
  }
  return product ? (

    <div className='h-screen w-[70%] m-auto flex  justify-center px-[8%] items-center gap-10'>
        <img className='h-[65%] w-[45%] object-contain' 
        src={`${product.image}`} alt="" />
        <div>
            <h1 className='text-4xl'>{product.title}</h1>
            <h2 className='text-zinc-300 text-sm my-4'>men's clothing</h2>
            <h2 className='text-red-300'>$ {product.price}</h2>
            <h2 className='mb-8 '>{product.description}</h2>
            <Link className='border px-6 py-2 border-blue-200 text-blue-300 mr-4'>
            Edit</Link>
            <button onClick={()=>deleteProductHandler(product.id)} className='border px-6 py-2 border-red-200 text-red-300'>
            Delete</button>
        </div>
    </div>
  ) : ( <Loader/> )
}

export default Details