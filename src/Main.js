
import { FaSearch } from "react-icons/fa";
import image1 from './imge/1.jpg';
// import image2 from './imge/2.jpg';
// import image3 from './imge/3.png';
// import image4  from './imge/4.png';
// import image5  from './imge/5.jpg';
// import image6  from './imge/6.png';
// import image7  from './imge/7.jpeg';
// import image8  from './imge/8.png';
// import image10  from './public/10.jpg';
// import image11  from './public/11.png';
// import image12  from './public/12.png';
// import image13  from './public/13.png';
// import image14  from './public/14.png';
// import image15  from './public/15.jpg';
// import image16  from './public/16.png';
function Main() {
    return (
        <div>
            <main dir='rtl' className='container pb-30 py-7 md:py-3 z-0'>
                
                <section className="relative top-28  flex-col justify-center items-center gap-y-4 ">
                    <div className='flex md:flex-row w-full flex-col'>
                        <div className='flex flex-col w-full md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w-1/5 gap-y-4 '>
                            <div className="flex rounded-xl overflow-hidden shadow-lg self-start w-full h-14 justify-between">
                                <div className='w-fuul h-full'>
                                    <input className=' w-full p-3 bg-white text-[14px] ' type='search' placeholder='جستوجو در تمامی آگهی ها' value="" />
                                </div>
                                <span className='flex justify-center items-center gap-x-2 py-4 px-4 bg-white text-blue-400 h-full' >
                                    <FaSearch />
                                </span>
                            </div>
                            <form className='flex flex-col justify-center items-center gap-y-4'>
                                <div className='flex flex-col gap-4 w-full'>
                                    <div className=' flex flex-col gap-y-10 bg-white w-full py-6 px-6 rounded-xl shadow-lg' >
                                        <h2 className='text-lg font-bold'>دسته بندی و محدوده</h2>
                                        <div className='flex flex-col gap-y-10'>
                                            <div className='flex flex-col gap-y-4'>
                                                <p className='text-blue-400'>  
                                                    <span className='text-red-500'>*</span>
                                                    دسته بندی اصلی آگهی
                                                </p>
                                                <select className='bg-white border-b outline-none py-2 px-4 w-full font-bold text-base'>
                                                    <option>همه</option>
                                                    <option>ولوو</option>
                                                    <option>بنز</option>
                                                    <option>رنو</option>
                                                    <option>دف</option>
                                                    <option>ایویکو</option>
                                                    <option>ماک</option>
                                                    <option>مرد</option>
                                                    <option>انواع کامیون و کامیونت</option>
                                                    <option>ISUZO</option>
                                                    <option>عکس</option>
                                                    <option>FAW</option>
                                                    <option>هیوندای</option>
                                                    <option>دانگ فنگ</option>
                                                    <option>دوست</option>
                                                    <option>پیلسان</option>
                                                    <option>داوران</option>
                                                    <option>DIMA</option>
                                                    <option>فوسو</option>
                                                    <option>اسکانیا</option>
                                                </select>
                                            </div>
                                            <div className='flex flex-col gap-y-4'>
                                                <p className='text-blue-400'>
                                                    <span className='text-red-500'>*</span>
                                                    زیر دسته بندی آگهی
                                                </p>
                                                <select className='bg-white border-b outline-none py-2 px-4 w-full font-bold text-base'>
                                                    <option>همه</option>
                                                    <option>لوازم موتوری</option>
                                                    <option>لوازم گیریبکس</option>
                                                    <option>لوازم برقی</option>
                                                    <option>لوازم بدنه ای</option>
                                                    <option>دیفرانسیل(قطعات)</option>
                                                    <option>گاردان(قطعات)</option>
                                                    <option>قطعات سیستم تعلیق و ترمز(فنرکمک,فنر,لنت,دیسک,کاسه,...)</option>
                                                    <option>رینگ و لاستیک</option>
                                                    <option>قطعات بادی و سوپاپ ها</option>
                                                    <option>بلبرینگ,گیریبکس,تسمه,کاسه نمد</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-y-10'>
                                            <div>
                                                <p className='text-blue-400'>
                                                    <span className='text-red-500'>*</span>
                                                    استان آگهی
                                                </p>
                                                <select className='bg-white border-b outline-none py-2 px-4 w-full font-bold text-base'>
                                                    <option>همه</option>
                                                    <option>آ‌ربایجان شرقی</option>
                                                    <option>آذربایجان غربی</option>
                                                    <option>اردبیل</option>
                                                    <option>اصفهان</option>
                                                    <option>البرز</option>
                                                    <option>ایلام</option>
                                                    <option>بوشهر</option>
                                                    <option>تهران</option>
                                                    <option>چهارمحال و بختیاری</option>
                                                    <option>خراسان جنوبی</option>
                                                    <option>خراسان رضوی</option>
                                                    <option>خراسان شمالی</option>
                                                    <option>خوزستان</option>
                                                    <option>زنجان</option>
                                                    <option>سمنان</option>
                                                    <option>سیستان و بلوچستان</option>
                                                    <option>فارس</option>
                                                    <option>قزوین</option>
                                                    <option>قم</option>
                                                    <option>کردستان</option>
                                                    <option>کرمان</option>
                                                    <option>کرمانشاه</option>
                                                    <option>کهگیلویه و بویراحمد</option>
                                                    <option>گلستان</option>
                                                    <option>لرستان</option>
                                                    <option>گیلان</option>
                                                    <option>مازندران</option>
                                                    <option>مرکزی</option>
                                                    <option>هرمزگان</option>
                                                    <option>همدان</option>
                                                    <option>یزد</option>
                                                </select>
                                            </div>
                                            <div>
                                                <p className='text-blue-400'>
                                                    <span className='text-red-500'>*</span>
                                                    شهر آگهی
                                                </p>
                                                <select className='bg-white border-b outline-none py-2 px-4 w-full font-bold text-base'>
                                                    <option>همه</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>

                                            <button>جستوجو</button>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    
                <div className=" w-full grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3 justify-start flex-wrap grow content-start px-6 " >
                    <a className="flex justify-between items-center gap-x-0 w-92 max-h-[150px] border overflow-hidden rounded-xl shadow-sm bg-white  no-underline text-black ">
                        <div className="w-3/5 px-4 flex flex-col gap-y-2 py-2">
                            <h2 className='font-bold text-lg'>فروشگاه قطعات</h2>
                            <h6 className='font-bold text-gray-500'>
                                <span>0</span>
                                <span>تومان</span>
                            </h6>
                        </div> 
                        <div className='w-2/5 h-full flex justify-center items-center'>
                            <div className='overflow-hidden object-cover w-[135px] h-[135px] p-2 rounded-2xl mr-auto'>
                                <img className='w-full h-full' src={image1} alt='' />
                                <div className='sticky text-right '>
                                    <img src={image1} alt='' />
                                </div>
                            </div>                            
                        </div>                     
                    </a>
                    <a className="flex justify-between items-center gap-x-0 w-92 max-h-[150px] border  overflow-hidden rounded-xl shadow-sm bg-white no-underline text-black">
                        <div className="w-3/5 px-4 flex flex-col gap-y-2 py-2">
                            <h2 className='font-bold text-lg'>فروشگاه قطعات</h2>
                            <h6 className='font-bold text-gray-500'>
                                <span>0</span>
                                <span>تومان</span>
                            </h6>
                        </div> 
                        <div className='w-2/5 h-full flex justify-center items-center'>
                            <div className='overflow-hidden object-cover w-[135px] h-[135px]   p-2 rounded-2xl mr-auto'>
                                <img className='w-full h-full' src={image1} alt='' />
                                <div className='sticky text-right '>
                                    <img src={image1} alt='' />
                                </div>
                            </div>                            
                        </div>
                    </a>
                    <a className="flex justify-between items-center gap-x-0 w-92 max-h-[150px] border overflow-hidden rounded-xl shadow-sm bg-white  no-underline text-black">
                        <div className="w-3/5 px-4 flex flex-col gap-y-2 py-2">
                            <h2 className='font-bold text-lg'>فروشگاه قطعات</h2>
                            <h6 className='font-bold text-gray-500'>
                                <span>0</span>
                                <span>تومان</span>
                            </h6>
                        </div> 
                        <div className='w-2/5 h-full flex justify-center items-center'>
                            <div className='overflow-hidden object-cover w-[135px] h-[135px]  p-2 rounded-2xl mr-auto'>
                                <img className='w-full h-full' src={image1} alt='' />
                                <div className='sticky text-right '>
                                    <img src={image1} alt='' />
                                </div>
                            </div>                            
                        </div>
                    </a>
                    <a className="flex justify-between items-center gap-x-0 w-92 max-h-[150px] border overflow-hidden rounded-xl shadow-sm bg-white  no-underline text-black">
                        <div className="w-3/5 px-4 flex flex-col gap-y-2 py-2">
                            <h2 className='font-bold text-lg'>فروشگاه قطعات</h2>
                            <h6 className='font-bold text-gray-500'>
                                <span>0</span>
                                <span>تومان</span>
                            </h6>
                        </div> 
                        <div className='w-2/5 h-full flex justify-center items-center'>
                            <div className='overflow-hidden object-cover w-[135px] h-[135px] p-2 rounded-2xl mr-auto'>
                                <img className='w-full h-full' src={image1} alt='' />
                                <div className='sticky text-right '>
                                    <img src={image1} alt='' />
                                </div>
                            </div>                            
                        </div>
                    </a>
                    <a className="flex justify-between items-center gap-x-0 w-92 max-h-[150px] border overflow-hidden rounded-xl shadow-sm bg-white  no-underline text-black">
                        <div className="w-3/5 px-4 flex flex-col gap-y-2 py-2">
                            <h2 className='font-bold text-lg'>فروشگاه قطعات</h2>
                            <h6 className='font-bold text-gray-500'>
                                <span>0</span>
                                <span>تومان</span>
                            </h6>
                        </div> 
                        <div className='w-2/5 h-full flex justify-center items-center'>
                            <div className='overflow-hidden object-cover w-[135px] h-[135px] p-2 rounded-2xl mr-auto'>
                                <img className='w-full h-full' src={image1} alt='' />
                                <div className='sticky text-right '>
                                    <img src={image1} alt='' />
                                </div>
                            </div>                            
                        </div>
                    </a>
                    <a className="flex justify-between items-center gap-x-0 w-92 max-h-[150px] border overflow-hidden rounded-xl shadow-sm bg-white  no-underline text-black">
                        <div className="w-3/5 px-4 flex flex-col gap-y-2 py-2">
                            <h2 className='font-bold text-lg'>فروشگاه قطعات</h2>
                            <h6 className='font-bold text-gray-500'>
                                <span>0</span>
                                <span>تومان</span>
                            </h6>
                        </div> 
                        <div className='w-2/5 h-full flex justify-center items-center'>
                            <div className='overflow-hidden object-cover w-[135px] h-[135px] p-2 rounded-2xl mr-auto'>
                                <img className='w-full h-full' src={image1} alt='' />
                                <div className='sticky text-right '>
                                    <img src={image1} alt='' />
                                </div>
                            </div>                            
                        </div>
                    </a>
                    <a className="flex justify-between items-center gap-x-0 w-92 max-h-[150px] border overflow-hidden rounded-xl shadow-sm bg-white  no-underline text-black">
                        <div className="w-3/5 px-4 flex flex-col gap-y-2 py-2">
                            <h2 className='font-bold text-lg'>فروشگاه قطعات</h2>
                            <h6 className='font-bold text-gray-500'>
                                <span>0</span>
                                <span>تومان</span>
                            </h6>
                        </div> 
                        <div className='w-2/5 h-full flex justify-center items-center'>
                            <div className='overflow-hidden object-cover w-[135px] h-[135px] p-2 rounded-2xl mr-auto'>
                                <img className='w-full h-full' src={image1} alt='' />
                                <div className='sticky text-right '>
                                    <img src={image1} alt='' />
                                </div>
                            </div>                            
                        </div>
                    </a>
                    <a className="flex justify-between items-center gap-x-0 w-92 h-[150px] border overflow-hidden rounded-xl shadow-sm bg-white  no-underline text-black">
                        <div className="w-3/5 px-4 flex flex-col gap-y-2 py-2">
                            <h2 className='font-bold text-lg'>فروشگاه قطعات</h2>
                            <h6 className='font-bold text-gray-500'>
                                <span>0</span>
                                <span>تومان</span>
                            </h6>
                        </div> 
                        <div className='w-2/5 h-full flex justify-center items-center'>
                            <div className='overflow-hidden object-cover w-[135px] h-[135px] p-2 rounded-2xl mr-auto'>
                                <img className='w-full h-full' src={image1} alt='' />
                                <div className='sticky text-right '>
                                    <img  src={image1} alt='' />
                                </div>
                            </div>                            
                        </div>
                    </a>

                </div>
                </div>
                </section>
            </main>
        </div>
    )
}

export default Main