import React from 'react'
import flawer from "../assets/images/flawer.webp";
import BigBtn from './BigBtn';
import ellipis from "../assets/images/will-ellipis.png";
import ellipis2 from "../assets/images/will-ellipis2.png";

const WillGet = () => {
    return (
        <div className='relative'>
            <img className='absolute top-[18%] max-lg:max-w-[100px] max-sm:hidden right-0' src={ellipis} alt="ellipis" />
            <img className='absolute bottom-[-17%] max-lg:max-w-[100px] max-sm:hidden left-0' src={ellipis2} alt="ellipis" />
            <div className='container relative mt-[70px] sm:mt-[122px]'>
                <div className='flex flex-col absolute max-md:hidden md:top-[-72%] min-[850px]:top-[-80%] max-lg:left-0 max-lg:-rotate-90 lg:top-[-25%] right-[0%] items-start'>
                    <p className='lg:-rotate-90 rotate-90 inline-block font-light text-[20px] font-poppins mb-4 ml-[45px]'>MJH</p>
                    <div className='flex items-end'>
                        <p className=' ff-neue font-normal text-[40px] rotate-90 inline-block mb-[-15px]'>02</p>
                        <div className='border-e-2 h-[269px] w-[26px] border-b-2 border-[#F77B0B]'></div>
                    </div>
                </div>
                <div className="items-center mt-16 max-md:flex hidden gap-3" data-aos="fade-down">
                    <p className='ff-neue font-normal text-[40px]'>02</p>
                    <hr className='bg-[#F77B0B] h-[2px] w-[50px]' />
                </div>
                <div className="flex max-md:flex-col items-center">
                    <h2 className='text-black uppercase ff-neue sm:text-[45px] text-[40px] md:text-[52px] font-normal leading-[55px] mr-3 text-center' data-aos="fade-down">what you <br /><span className='text-[40px] sm:text-[50px] md:text-[60px]'> will</span> <span className='text-[#F77B0B] text-[40px] sm:text-[50px] md:text-[60px]'>get</span></h2>
                    <img src={flawer} alt="flawer" className='max-w-[224px] min-h-[216px]' />
                    <p className=' max-w-[433px] ml-[18px] border-s-2 border-[#9800B0] text-black font-poppins font-normal text-[14px] sm text-[14px]:sm:text-[16px] pl-[13px]' data-aos="fade-down">I will show you which steps are necessary for you to finally successfully let go of your EX. And I will support you to look confidently into your new future.</p>
                </div>
                <p className='ff-neue text-black font-bold text-[20px] text-center pt-[47px] pb-[38px]' data-aos="fade-down">In a 1:1 live coaching session, we will clarify the following questions in particular:</p>
                <div className="flex flex-row flex-wrap -mx-3 mb-[38px]">
                    <div className="md:w-4/12 sm:w-6/12 w-full group duration-500 min-h-[120px] sm:min-h-[230px] px-6 md:px-[48px] pt-5 sm:pt-[63px] hover:bg-[#F5FAFF]" data-aos="fade-down">
                        <p className=' font-poppins font-normal text-[14px] sm:text-[16px] text-black opacity-70 duration-500 capitalize group-hover:text-[#003E92]'>Why does your EX have to disappear from your life forever?</p>
                    </div>
                    <div className="md:w-4/12 sm:w-6/12 w-full group duration-500 min-h-[120px] sm:min-h-[230px] px-6 md:px-[48px] pt-5 sm:pt-[63px] hover:bg-[#F5FAFF]" data-aos="fade-down">
                        <p className=' font-poppins font-normal text-[14px] sm:text-[16px] text-black opacity-70 duration-500 capitalize group-hover:text-[#003E92]'>What should your everyday life as a single person look like now and how can you cope with the new challenges?</p>
                    </div>
                    <div className="md:w-4/12 sm:w-6/12 w-full group duration-500 min-h-[120px] sm:min-h-[230px] px-6 md:px-[48px] pt-5 sm:pt-[63px] hover:bg-[#F5FAFF]" data-aos="fade-down">
                        <p className=' font-poppins font-normal text-[14px] sm:text-[16px] text-black opacity-70 duration-500 capitalize group-hover:text-[#003E92]'>How can you handle the divorce <span className='text-nowrap'> quickly and without complications</span>, without worrying about finances or the well-being of the children?</p>
                    </div>
                    <div className="md:w-4/12 sm:w-6/12 w-full group duration-500 min-h-[120px] sm:min-h-[230px] px-6 md:px-[48px] pt-7 sm:pt-[88px] hover:bg-[#F5FAFF]" data-aos="fade-down">
                        <p className=' font-poppins font-normal text-[14px] sm:text-[16px] text-black opacity-70 duration-500 capitalize group-hover:text-[#003E92]'>Who are you without your EX?</p>
                    </div>
                    <div className="md:w-4/12 sm:w-6/12 w-full group duration-500 min-h-[120px] sm:min-h-[230px] px-6 md:px-[48px] pt-7 sm:pt-[88px] hover:bg-[#F5FAFF]" data-aos="fade-down">
                        <p className=' font-poppins font-normal text-[14px] sm:text-[16px] text-black opacity-70 duration-500 capitalize group-hover:text-[#003E92]'>What new dreams and hopes do you want to live?</p>
                    </div>
                    <div className="md:w-4/12 sm:w-6/12 w-full group duration-500 min-h-[120px] sm:min-h-[230px] px-[34px] pt-5 sm:pt-[63px]" data-aos="fade-down">
                        <BigBtn class="rounded-[8px] max-w-[312px]" secondclass="rounded-[8px] !py-[10px]" />
                    </div>
                </div>
                <div className='flex flex-col absolute max-md:hidden bottom-[-10%] left-0 items-start'>
                    <div className='flex items-end'>
                        <div className='border-s-2 h-[581px] w-[26px] border-b-2 border-[#F77B0B]'></div>
                        <div className='flex items-baseline mb-[-7px]'>
                            <p className=' ff-neue font-normal text-[25px] xl:text-[40px] -rotate-90 inline-block mb-[-15px]'>03</p>
                            <p className=' ff-neue text-[14px] sm:text-[16px] xl:text-[20px] font-normal text-black uppercase'>Goal</p>
                        </div>
                    </div>
                </div>
                <div className="items-center mt-16 max-md:flex hidden gap-3" data-aos="fade-down">
                    <p className='ff-neue font-normal text-[40px]'>03</p>
                    <p className='ff-neue font-normal text-[20px]'>goals</p>
                    <hr className='bg-[#F77B0B] h-[2px] w-[50px]' />
                </div>
            </div>
        </div>
    )
}
export default WillGet