import React from 'react';
import logo from './brand.png';

function Sinup() {
  return (
    <>
        <main>
            <section>
                <div>
                    <a>بازگشت به صفحه اصلی</a>
                </div>
                <a>
                    <img src={logo} />
                </a>
                <div>
                    <h1> ورود دو مرحله ای</h1>
                    <p>رای ورود به اپلیکیشن <span>قفسه</span> لطفا شماره موبایل خود را وارد کنید <span>:)</span>
                    </p>
                </div>
                <div>
                    <form>
                        <div>
                            <input type='text' placeholder='نام'></input>
                            <input type='text' placeholder=' نام خانوادگی'></input>
                            <input type='number' placeholder='شماره موبایل'></input>
                            <input type='password' placeholder='رمز عبور'></input>
                        </div>
                        <button type='submit'> ایجاد حساب</button>
                    </form>
                    <div>
                        <p>ثبت نام نکرده اید؟</p>
                        <a> ایجاد حساب جدید</a>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Sinup