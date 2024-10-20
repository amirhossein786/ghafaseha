import React from 'react'
import { FiBook } from "react-icons/fi";
function Rules() {
  return (
    <>
      <main className='container pb-30 py-7 md:py-3'>  
        <section className='mt-4'>
          
          <div className=' flex flex-col justify-center items-center gap-x-2 bg-blue-400 p-4 rounded-xl shadow-md w-full text-white'>           
            <div className='flex justify-center items-center gap-y-4'>         
            <FiBook />
              <h1>قوانین و مقررات</h1>
            </div>  
            <p className='text-black text-sm leading-10 font-medium text-center bg-white p-4 rounded-xl shadow-lg'>تست</p>
            </div>
        </section>
      </main>
    </>
  )
}

export default Rules