
import logo from './imge/brand.png';
import styles from "./login.css" ;
function Login() {
  return (
    <>
        <main className='main-login'>
            <section>
                <div className='text-login'>
                    <a>بازگشت به صفحه اصلی</a>
                </div>
                <a>
                    <img src={logo} className='img-login' />
                </a>
                <div>
                    <h1> ورود دو مرحله ای</h1>
                    <p>رای ورود به اپلیکیشن <span>قفسه</span> لطفا شماره موبایل خود را وارد کنید <span>:)</span>
                    </p>
                </div>
                <div>
                    <form>
                        <input type='text' placeholder='** ** *** **09'></input>
                        <button></button>
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

export default Login