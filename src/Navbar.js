
import { BrowserRouter as Link  } from "react-router-dom";

import React, { useState } from 'react';
import { FcAdvertising } from "react-icons/fc";
import { FiHome, FiUser,FiAlertCircle,FiBookOpen,FiBook,FiPhoneIncoming  } from "react-icons/fi";
import { AiOutlineBars } from "react-icons/ai";
import { GoPencil } from "react-icons/go";



import logo from './imge/brand.png';





const Modal = ({ show, handleClose }) => {
  if (!show) return null;

  return (
    
    <section className="  container bg-white flex flex-col items-center justify-center text-center gap-y-3 px-3 md:py-6 !rounded-xl m-8  absolute z-20 w-[400px] h-[300px] transition-all duration-300 bg-current">
        <button className="text-3xl absolute top-3 left-3 cursor-pointer hover:text-blue-400 transition-all !z-20 " onClick={handleClose}>×</button>
    <div className="flex flex-col gap-y-8 w-full p-2 md:p-6">
      <div className="flex flex-col items-center justify-center  ">
        
        <a className="flex flex-col items-center justify-center gap-y-1 w-full no-underline border-1 border-blue-400">
        <span className="text-lg">ورود </span>
        <span className="!font-normal">( قبلا ثبت نام کرده ام)</span>
        </a>
        <hr></hr>
        <a className="flex flex-col items-center justify-center gap-y-1 w-full no-underline border-1 border-blue-400">
        
        <span className="text-lg"> ثبت نام </span>
        <span className="!font-normal">(ایجاد حساب کاربری)</span>
        </a>
      </div>
    </div>
    </section>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div dir="rtl">
       <nav className=' fixed top-0 right-0 left-0 shadow-lg bg-blue-400 rounded-bl-xl rounded-br-xl py py-4 font-bold   text-white backdrop-blur-sm z-20 opacity-95 '>
        <div className="container flex items-center justify-between py-1 lg:py-2">
          <div className='flex justify-start items-center gap-x-2'>
            <button className="block text-white lg:hidden text-[35px] cursor-pointer mx-1" 
            onClick={handleToggle}
            >
                          <AiOutlineBars />

            </button>
            <Link to="/Home" className='flex justify-start items-center gap-x-2 no-underline '>
              <div className="flex flex-col justify-center items-center gap-y0.5 border-2 border-blue-400 rounded-full shadow-lg bg-blue-300" >
                <img className=" w-10 h-10 sm:h-14 sm:w-14 object-cover rounded-full bg-white  "  src={logo} alt='logo' />
              </div>
              <div className='hidden sm:flex justify-start items-center gap-x-1 font-bold text-sm sm:text-lg text-white '>
                <span>اپلیکیشن</span>
                <span className="text-3xl">قفسه</span>
              </div>
            </Link>
          </div>
          
          <div>
            <ul className='hidden xl:flex justify-start items-start gap-x-8  '> 
                            <Link to="/Home" className="hover:text-white transition-all no-underline">
                            <li>
                            <span className="text-white ">خانه  </span>
                            </li>
                            </Link>
                            <Link to="/About" className="hover:text-white transition-all no-underline">
                            <li>
                            <span className="text-white ">درباره ما  </span>
                            </li>
                            </Link>
                            <Link to="/Privacy" className="hover:text-white transition-all no-underline">
                            <li>
                            <span className="text-white ">حریم خصوصی  </span>
                            </li>
                            </Link>
                            <Link to="/Rules" className="hover:text-white transition-all no-underline">
                            <li>
                            <span className="text-white ">قوانین و مقررات  </span>
                            </li>
                            </Link>
                            <Link to="/Contact" className="hover:text-white transition-all no-underline">
                            <li>
                            <span className="text-white ">تماس  </span>
                            </li>
                            </Link>
            </ul>
          </div>
          
      
              <button className="bg-white text-blue-400 border-white rounded-xl w-32 h-10 mx-5"  
              type='button' 
              onClick={openModal}
              >ورود/ایجاد آگهی</button>
        </div>
      </nav> 

     <nav className={`fixed top-0 right-0 w-64 h-full z-30 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
      <div className='relative flex items-center justify-between py-6 m-2 shadow-md rounded-xl z-20'>
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-blue-400 rounded-xl z-0"></div>
          <a className='flex flex-col justify-center items-start gap-y-1 z-10 no-underline ' href="/home">
            <div className='flex flex-col justify-center items-center gap-y-0.5 border-2 border-blue-400 rounded-full shadow-lg bg-blue-200'>
              <img className="w-10 h-10 sm:h-14 sm:w-14 object-cover rounded-full" src={logo} alt='logo' />
            </div>
            <div className='flex justify-start items-center gap-x-1 font-bold text-base drop-shadow-lg text-white  '>
              <span>اپلیکیشن</span>
              <span>قفسه</span>
            </div>
          </a>
          <button className="flex z-10 text-4xl text-white" onClick={handleToggle}>×</button>
        </div> 
         <div className="py-4 ">
            <ul className='flex flex-col items-start justify-center gap-x-6 py-2 px-0 bg-white rounded-xl shadow-md m-3 '> 
                            
                            <li className="hover:text-blue-400 transition-all w-full">
                              <Link to="/Home" className="flex items-center justify-start gap-x-4 py-3 px-6 no-underline">                                
                                <FiHome />
                                <span className="text-black ">خانه  </span>

                                                             
                              </Link>
                            </li>
                            <li className="hover:text-blue-400 transition-all w-full">
                              <Link to="/About" className="flex items-center justify-start gap-x-4 py-3 px-6 no-underline">                                
                              <FiAlertCircle />
                                <span className="text-black">درباره ما </span>

                                
                              </Link>
                            </li>
                            <li className="hover:text-blue-400 transition-all w-full">
                              <Link to="/Privacy" className="flex items-center justify-start gap-x-4 py-3 px-6 no-underline">                                
                              <FiBookOpen />
                                <span className="text-black">  حریم خصوصی</span>

                               
                              </Link>
                            </li>
                            <li className="hover:text-blue-400 transition-all w-full">
                              <Link to="/Rules" className="flex items-center justify-start gap-x-4 py-3 px-6 no-underline">                                
                                <FiBook />
                                <span className="text-black">قوانین و مقررات </span>

                                

                              </Link>
                            </li>
                            <li className="hover:text-blue-400 transition-all w-full">
                              <Link to="/Contact" className="flex items-center justify-start gap-x-4 py-3 px-6 no-underline">                                
                                <FiPhoneIncoming  />
                               <span className="text-black"> تماس</span>
                              </Link>
                            </li>
            </ul>
          </div>
          
      </nav> 
      

     <footer dir="ltr"  className=" p-3 fixed bottom-0 right-0 left-0 lg:hidden  bg-blue-400 h-20 z-10 ">
     <ul className='flex justify-between w-full flex-row-reverse '>     
                <li>
                  <Link to="/Home" className="flex flex-col justify-center items-center gap-y-0.25 no-underline">
                    <span className="p-2 bg-white rounded-full flex justify-center items-center shadow-1g"><FiHome /></span>
                    <span className="text-white text-[14px] drop-shadow-md py-1">خانه</span>
                    </Link>
                </li>
                <li>
                  <Link to="/Home" className="flex flex-col justify-center items-center gap-y-0.25 no-underline">
                  <span className="p-2 bg-white rounded-full flex justify-center items-center shadow-1g"><AiOutlineBars /></span>
                    <span className="text-white text-[14px] drop-shadow-md py-1">دسته بندی</span>
                    </Link>
                </li>
               <li>
                  <Link to="/Home" className="flex flex-col justify-center items-center gap-y-0.25 no-underline ">
                  <span className="p-2 bg-white rounded-full flex justify-center items-center shadow-1g"><GoPencil /></span>
                    <span className="text-white text-[14px] drop-shadow-md py-1">ایجاد آگهی</span>
                    </Link>
                </li>
                <li>
                  <Link to="/Home" className="flex flex-col justify-center items-center gap-y-0.25 no-underline">
                  <span className="p-2 bg-white rounded-full flex justify-center items-center shadow-1g"><FiUser /></span>
                    <span className="text-white text-[14px] drop-shadow-md py-1">پروفایل</span>
                    </Link>
                </li>
                <li>
                  <Link to="/Home" className="flex flex-col justify-center items-center gap-y-0.25 no-underline">
                  <span className="p-2 bg-white rounded-full flex justify-center items-center shadow-1g"><FcAdvertising/></span>
                    <span className="text-white text-[14px] drop-shadow-md py-1">آگهی من</span>
                    </Link>
                </li>
      </ul>
      
     </footer>

      <Modal show={isModalOpen} handleClose={closeModal} />
      
   </div>
  );
}

export default Navbar;