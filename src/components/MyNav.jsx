import React, { useState } from 'react'
import logo from "../assets/images/logo.webp";
import call from "../assets/images/call.svg";
import BigBtn from './BigBtn';

const MyNav = () => {
    const [navbar, setnavbar] = useState(false);
    function view() {
        setnavbar(!navbar)
        document.body.classList.toggle("max-md:overflow-hidden");
    }
    return (
        <div className='bg-[url(./assets/images/herobg.webp)] flex flex-col min-h-screen max-lg:bg-[20%] bg-cover lg:bg-100 bg-no-repeat'>
            <nav className='h-[56px] mt-6'>
                <div className="container flex justify-between items-center">
                    <a href="#" className='inline-block'>
                        <img width={145} height={53} src={logo} alt="logo" />
                    </a>
                    <ul className={`flex items-center gap-[40px] duration-500 max-md:flex-col max-md:justify-center max-md:fixed max-md:top-0 z-20 max-md:h-full max-md:w-full max-md:bg-white ${navbar ? "opacity-100 left-0" : "max-md:opacity-0 max-md:left-[-100%]"}`}>
                        <li><a href="#benefit" className="text-white font-bold text-[16px] opacity-70 ff-neue max-lg:text-black hover:text-black duration-300" onClick={view}>Benifits</a></li>
                        <li><a href="#Testimonials" className="text-white font-bold text-[16px] opacity-70 ff-neue max-lg:text-black hover:text-black duration-300" onClick={view}>Testimonials</a></li>
                        <li><a href="#" className='text-white hover:bg-white hover:text-transparent border-2 border-transparent hover:border-[#8703C5] hover:bg-clip-text bg-btn px-[28px] py-4 font-Inter text-[16px] font-medium inline-block'>Book consultation now</a></li>
                    </ul>
                    <div className='relative z-30 md:hidden' onClick={view}>
                        {navbar ? (<label className="flex flex-col justify-items-center gap-1.5">
                            <span className="h-1 w-8 rounded-full bg-black rotate-45 duration-500"></span>
                            <span className="h-1 w-8 rounded-full bg-black -rotate-45 absolute duration-500"></span>
                        </label>) :
                            (<label className="flex flex-col justify-items-center gap-1.5" >
                                <span className="h-1 w-8 rounded-full bg-black duration-500"></span>
                                <span className="h-1 w-8 rounded-full bg-black duration-500"></span>
                                <span className="h-1 w-8 rounded-full bg-black duration-500"></span>
                            </label>)}
                    </div>
                </div>
            </nav>
            <header className='grow'>
                <div className="container">
                    <div className="flex flex-wrap min-h-[85vh] flex-row max-lg:gap-6 -mx-3">
                        <div className=" lg:w-6/12 w-full px-3 flex flex-col max-lg:justify-end justify-center">
                            <p className='text-[#F77B0B] ff-neue font-semibold text-[18.8px]' data-aos="zoom-in">Marc Joachim Hubrich</p>
                            <h1 className='md:text-[60px] sm:text-[50px] text-[40px] leading-[55px] md:leading-[77.28px] font-normal ff-neue text-black ' data-aos="zoom-in">NOW I LET YOU <span className='block'>GO!</span></h1>
                            <p className='text-black text-[14px] sm:text-[16px] font-poppins opacity-70 pt-2 font-normal' data-aos="zoom-in">For women who do not want to be completely dragged down by<span className='md:block'> a SEPARATION.</span>
                                How to let go of your EX so you can leave him behind
                                without <span className='md:block'>having to run to a therapist right away.</span></p>
                            <div className='flex items-center gap-[17px] mt-[32px]' data-aos="zoom-in">
                                <BigBtn class="rounded-[63px]" secondclass="rounded-[63px]" />
                                <a href="tel:+"><img src={call} alt="call" /></a>
                            </div>
                        </div>
                        <div className=" lg:w-6/12 px-3 w-full flex lg:items-end">
                            <div className="flex gap-5 sm:gap-10 border-s-2 h-[70px] border-[#9800B0]">
                                <p className='text-white max-lg:text-black ff-neue font-normal text-[16px] pl-[13px] uppercase' data-aos="zoom-in">Die wichtigsten <br /> Aspekte einer <br /> Trennung:</p>
                                <ul>
                                    <li className="text-white max-lg:text-black list-disc font-poppins text-[16px] font-medium" data-aos="zoom-in">physische Trennung</li>
                                    <li className="text-white max-lg:text-black list-disc font-poppins text-[16px] font-medium" data-aos="zoom-in">mentale Trennung</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default MyNav
