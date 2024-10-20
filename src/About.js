import React from 'react'
import { FiInfo } from "react-icons/fi";


function About() {

  return (
    <>
      
      <main className='container pb-30 py-7 md:py-3'>  
        <section className='mt-4'>
          
          <div className=' flex flex-col justify-center items-center gap-x-2 bg-blue-400 p-4 rounded-xl shadow-md w-full text-white'>           
            <div className='flex justify-center items-center gap-y-4'>         
              <FiInfo />
              <h1>درباره ما</h1>
            </div>
            <p className='text-black text-sm leading-10 font-medium text-center bg-white p-4 rounded-xl shadow-lg'>قفسه هابه منظور سهولت افراد وکاربران برای پیدا کردن قطعات مورد نیاز در صنعت کامیون سازی وتعمیرات کامیون وماشین های سنگین ایجاد شده است از طریق قفسه ها میتوانید به اگهی های زیادی مربوط به قطعات کامیون دسترسی پیدا کنید توجه داشته باشید قفسه ها پل ارتباطی میان خریدار وفروشنده میباشد ودر قبال اجناس مسئولیتی را نمیتواند بپذیرد</p>
          </div>
        </section>
      </main>
      
    </>

  )
}

export default About