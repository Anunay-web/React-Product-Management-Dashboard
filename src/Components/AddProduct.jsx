import React, { useContext, useState } from 'react'
import { ProductContext } from '../Utils/Context'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const navigate = useNavigate()
    const [image, setimage] = useState("")
    const [title, settitle] = useState("")
    const [category, setcategory] = useState("")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")

    const [products,setproducts] = useContext(ProductContext)

    const AddProductHandler = (e)=>{
        e.preventDefault()

        const product = {
            id:nanoid(),
            image,
            title,
            category,
            price,
            description
        }
        
        setproducts([...products, product])
        localStorage.setItem("products", JSON.stringify([...products, product]))
        navigate("/")
    }



  return <form onSubmit={AddProductHandler} className='flex flex-col items-center w-screen h-screen p-[10%]' action="">
    <h1 className='text-3xl mb-4'>Add New Products</h1>
    <input className='text-xl bg-zinc-100 mb-4 w-1/2' type="url" placeholder='image' onChange={(e)=> setimage(e.target.value)} value={image}/>
    <input className='text-xl bg-zinc-100 mb-4 w-1/2' type="text" placeholder='title' onChange={(e)=> settitle(e.target.value)} value={title}/>
    <div className='w-1/2 flex justify-between'>
    <input className='text-xl bg-zinc-100 mb-4 w-[49%]' type="text" placeholder='Category' onChange={(e)=> setcategory(e.target.value)} value={category} />
    <input className='text-xl bg-zinc-100 mb-4 w-[49%]' type="number" placeholder='Price' onChange={(e)=> setprice(e.target.value)} value={price}/>
    </div>
    <textarea placeholder='Enter Description.....' className='bg-zinc-100 w-1/2 h-42 text-xl mb-4' onChange={(e)=> setdescription(e.target.value)} value={description}></textarea>
    <div className='w-1/2'>
     <button className='border px-6 py-2 border-blue-200 text-blue-300' href="/create">Add Product</button>
    </div>
  </form>
}

export default AddProduct