import React from 'react'
import BigBtn from './BigBtn'
const Binding = () => {
    return (
        <div className='bg-[#F2F8FF] overflow-x-clip' id='benefit'>
            <div className="container pt-8 pb-8 sm:pt-[71px] sm:pb-[59px]">
                <div className='flex max-md:flex-col w-full items-center justify-between'>
                    <div data-aos="fade-right">
                        <h2 className='ff-neue font-normal text-black text-[35px] sm:text-[45px] md:text-[48px] leading-[66px] uppercase'>Request your </h2>
                        <h2 className='ff-neue font-normal text-black text-[35px] sm:text-[45px] md:text-[48px] leading-[66px] uppercase'><span className='text-[#F77B0B]'>non-binding </span> strategy</h2>
                        <h2 className='ff-neue font-normal text-black text-[35px] sm:text-[45px] md:text-[48px] leading-[66px] uppercase'>Request your </h2>
                    </div>
                    <p className=' md:max-w-[410px] max-md:mt-5 md:ml-[129px] border-s-2 border-[#9800B0] text-black font-poppins font-normal text-[16px] pl-[13px]' data-aos="fade-left">Click on the button below, choose an appointment and answer the questions truthfully. One of our strategy consultants will then contact you and conduct your free consultation. We can advise you on the following topics: </p>
                </div>
            </div>
            <div className="bg-[url(./assets/images/binding-bg.webp)] bg-no-repeat bg-100 pt-[70px] md:pt-[111px] pb-[60px] md:pb-[186px] overflow-hidden">
                <div className='container flex flex-col items-center'>
                    <div className="flex flex-row flex-wrap -mx-3 justify-center">
                        <div className="md:w-8/12 w-full px-3">
                            <div className="flex flex-row flex-wrap -mx-3 px-3" data-aos="flip-down">
                                <div className="md:w-4/12 sm:w-6/12 w-full bg-[#FFFFFF26] hover:bg-[#003E92] duration-500 backdrop-blur-sm min-h-[150px] lg:h-[200px] px-5 lg:px-[38.5px] pt-[30px] lg:pt-[61px]">
                                    <p className='text-white font-poppins font-normal text-[16px]'>How do I let go of my EX so I can finally leave him behind?</p>
                                </div>
                                <div className="md:w-4/12 sm:w-6/12 w-full bg-[#FFFFFF26] hover:bg-[#003E92] duration-500 backdrop-blur-sm min-h-[150px] lg:h-[200px] px-5 lg:px-[38.5px] pt-[30px] lg:pt-[61px]">
                                    <p className='text-white font-poppins font-normal text-[16px]'>How does the divorce process work?</p>
                                </div>
                                <div className="md:w-4/12 sm:w-6/12 w-full bg-[#FFFFFF26] hover:bg-[#003E92] duration-500 backdrop-blur-sm min-h-[150px] lg:h-[200px] px-5 lg:px-[38.5px] pt-[30px] lg:pt-[61px]">
                                    <p className='text-white font-poppins font-normal text-[16px]'>Do I need a lawyer?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center mb-[58px] mt-[34px] -mx-3">
                        <div className="md:w-10/12 w-full px-3">
                            <div className="flex flex-wrap flex-row -mx-3 px-3" data-aos="flip-up">
                                <div className="md:w-3/12 sm:w-6/12 w-full bg-[#FFFFFF26] hover:bg-[#003E92] duration-500 backdrop-blur-sm min-h-[150px] lg:h-[200px] px-5 lg:px-[38.5px] pt-[30px] lg:pt-[61px]">
                                    <p className='text-white font-poppins font-normal text-[16px]'>How much will the divorce cost?</p>
                                </div>
                                <div className="md:w-3/12 sm:w-6/12 w-full bg-[#FFFFFF26] hover:bg-[#003E92] duration-500 backdrop-blur-sm min-h-[150px] lg:h-[200px] px-5 lg:px-[38.5px] pt-[30px] lg:pt-[61px]">
                                    <p className='text-white font-poppins font-normal text-[16px]'>What will happen to my children?</p>
                                </div>
                                <div className="md:w-3/12 sm:w-6/12 w-full bg-[#FFFFFF26] hover:bg-[#003E92] duration-500 backdrop-blur-sm min-h-[150px] lg:h-[200px] px-5 lg:px-[38.5px] pt-[30px] lg:pt-[61px]">
                                    <p className='text-white font-poppins font-normal text-[16px]'>What does my future as a single person look like now?</p>
                                </div>
                                <div className="md:w-3/12 sm:w-6/12 w-full bg-[#FFFFFF26] hover:bg-[#003E92] duration-500 backdrop-blur-sm min-h-[150px] lg:h-[200px] px-5 lg:px-[38.5px] pt-[30px] lg:pt-[61px]">
                                    <p className='text-white font-poppins font-normal text-[16px]'>How do I rebuild my self-esteem?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BigBtn class="rounded-[63px]" secondclass="rounded-[63px]" />
                </div>
            </div>
        </div>
    )
}

export default Binding
