import React from 'react'
import { VscCallIncoming } from "react-icons/vsc";
function Contact() {
  return (
    <>
    <main className='container pb-30 py-7 md:py-3'>  
        <section className='mt-4'>
          
          <div className=' flex flex-col justify-center items-center gap-x-2 bg-blue-400 p-4 rounded-xl shadow-md w-full text-white'>           
            <div className='flex justify-center items-center gap-y-4'>         
              <VscCallIncoming /> 
              <h1>تماس با ما</h1>
            </div>           
              <p className='text-black text-sm leading-10 font-medium text-center bg-white p-4 rounded-xl shadow-lg'>برای ارتباط با ققسه ها میتوانید از طریق ایمیل contact@ghafaseha.ir با ما در ارتباط باشید و یا پیشنهادات و انتقادات خود را از طریق تماس با شماره 09134369721 ارسال کنید.</p>
            </div>
        </section>
      </main>
      </>
  )
}

export default Contact