import React, { useContext } from 'react'
import { ProductContext } from '../Utils/Context'
import { Link } from 'react-router-dom';

function NavBar() {

  const [products] = useContext(ProductContext)
  let diffCategory = products && products.reduce((acc,cv)=> [...acc,cv.category],[])
  diffCategory = [...new Set(diffCategory)];
  return (
    // <div className=''>
        <nav className='w-[15%] h-full bg-zinc-100 pt-5  flex  flex-col items-center'>
        <a className='border px-6 py-2 border-blue-200 text-blue-300' href="/create">Add Product</a>
        <hr className=' w-[80%] my-5' />
        <h1 className='text-2xl w-[80%]'>Category</h1>
        <div className='w-[80%] my-2 flex flex-col'>
          {diffCategory.map((elem,index)=>{
            return <Link to={`/?category=${elem}`} className='text-lg'>
            <span className='w-[15px] h-[15px] bg-red-100 rounded-full inline-block mr-4'></span>
            {elem}
          </Link>
          })}
          
        </div>
        
      </nav>
    // </div>
  )
}

export default NavBar