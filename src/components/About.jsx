import React from 'react'
import man from "../assets/images/about-img.webp";
import ellipis from "../assets/images/about-ellipis.webp";
const About = () => {
    return (
        <div>
            <div className="container">
                <div className='flex max-md:hidden items-end mb-[52px]'>
                    <div className='border-s-2 h-[167px] w-[26px] border-b-2 border-[#F77B0B]'></div>
                    <div className='flex items-baseline mb-[-7px]'>
                        <p className=' ff-neue font-normal text-[25px] xl:text-[40px] -rotate-90 inline-block mb-[-15px]'>05</p>
                        <p className=' ff-neue text-[16px] xl:text-[20px] font-normal text-black uppercase'>about</p>
                    </div>
                </div>
                <div className="items-center mt-5 mb-6 max-md:flex hidden gap-3" data-aos="zoom-in">
                    <p className='ff-neue font-normal text-[40px]'>05</p>
                    <p className='ff-neue text-[16px] xl:text-[20px] font-normal text-black uppercase'>about</p>
                    <hr className='bg-[#F77B0B] h-[2px] w-[50px]' />
                </div>
                <div className="flex flex-row flex-wrap justify-center -mx-3">
                    <div className="lg:w-6/12 px-3 w-9/12">
                        <img className='w-full' src={man} alt="man-img" data-aos="zoom-in" />
                    </div>
                    <div className="lg:w-6/12 px-3 w-full max-lg:pt-5 relative">
                        <h2 className='text-black ff-neue sm:text-[45px] text-[40px] md:text-[52px] font-normal' data-aos="zoom-in">LAWYER <span className='text-[#F77B0B]'>& </span> DIVORCE <span className='lg:block'>COACH</span></h2>
                        <h4 className='md:text-[36px] sm:text-[28px] text-[22px] ff-neue font-normal text-black uppercase -mt-2' data-aos="zoom-in"><span className='text-[#F77B0B]'>M</span>arc <span className='text-[#F77B0B]'>J</span>oachim <span className='text-[#F77B0B]'>H</span>ubrich</h4>
                        <h6 className='text-black ff-neue font-bold capitalize text-[16px] sm:text-[20px] pt-[30px] pb-3' data-aos="zoom-in">About the mindset agency coach</h6>
                        <p className=' font-poppins font-normal text-black text-[14px] sm:text-[16px] opacity-70 max-w-[484px] pb-[35px]' data-aos="zoom-in">Marc J. Hubrich is the founder of the mindset agency specializing in consulting services.</p>
                        <div className='bg-border rounded-[59px] p-[2px] inline-block' data-aos="zoom-in">
                            <div className='bg-white rounded-[59px]'>
                                <button className='bg-text bg-clip-text group duration-300 text-transparent font-Inter text-[14px] sm:text-[16px] font-medium flex items-center bg-white py-4 px-6'>Learn more about the agency
                                    <span className='pl-3 group-hover:pl-4 duration-300'>
                                        <svg width="41" height="14" viewBox="0 0 41 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M40.101 7.60104C40.433 7.2691 40.433 6.73091 40.101 6.39896L34.6917 0.989595C34.3597 0.65765 33.8215 0.65765 33.4896 0.989595C33.1576 1.32154 33.1576 1.85973 33.4896 2.19168L38.2979 7L33.4896 11.8083C33.1576 12.1403 33.1576 12.6785 33.4896 13.0104C33.8215 13.3424 34.3597 13.3424 34.6917 13.0104L40.101 7.60104ZM0.5 7.85L39.5 7.85L39.5 6.15L0.5 6.15L0.5 7.85Z" fill="url(#paint0_linear_420_7)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_420_7" x1="-3.7" y1="7.38462" x2="-3.4011" y2="11.1488" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#0C5FD1" />
                                                    <stop offset="1" stopColor="#8703C5" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <img className='w-full lg:mt-7' src={ellipis} alt="ellipis" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
