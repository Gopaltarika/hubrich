import React from 'react'
const Target = () => {
    return (
        <div className='pt-[70px] sm:pt-[86px] overflow-hidden relative z-[1]'>
            <div className="bg-[#F2F8FF]">
                <div className="container flex max-sm:flex-col items-center justify-end pt-6 sm:pt-[48px] pb-6 sm:pb-[52px]" data-aos="fade-down">
                    <h2 className='uppercase text-black ff-neue font-normal sm:text-[45px] text-[40px] md:text-[52px] text-center'><span className=' text-[#F77B0B]'>TARGET</span> group</h2>
                    <p className=' sm:max-w-[360px] sm:ml-[129px] border-s-2 border-[#9800B0] text-black font-poppins font-normal text-[14px] sm:text-[16px] pl-[13px]'>The coaching is aimed at married women who have already separated or are thinking of separating.</p>
                </div>
            </div>
            <div className="bg-[url(./assets/images/target-bg.webp)] bg-no-repeat bg-100">
                <div className="container">
                    <div className="flex flex-row flex-wrap -mx-3 py-[70px] sm:py-[108px]">
                        <div className="sm:w-6/12 w-full">
                            <div className="bg-[#FFFFFF1F] backdrop-blur-[4px] hover:bg-[#003E92B2] duration-500 border border-[#FFFFFF26] max-w-[382px] w-full min-h-[187px] pl-[32px] pr-[37px] pt-[40px]" data-aos="fade-down">
                                <p className=' font-poppins font-normal text-[16px] text-white'>You have separated and have the feeling that you can never be happy again and that you will be alone forever.</p>
                            </div>
                            <div className="bg-[#FFFFFF1F] backdrop-blur-[4px] hover:bg-[#003E92B2] duration-500 mt-[32px] border border-[#FFFFFF26] max-w-[382px] w-full min-h-[187px] pl-[40px] pr-[38px] py-[41px]" data-aos="fade-down">
                                <p className=' font-poppins font-normal text-[16px] text-white'>How are you supposed to be able to let go of someone who is so entangled with your life? It's impossible, isn't it?</p>
                            </div>
                        </div>
                        <div className="sm:w-6/12 w-full flex pt-6 sm:items-end justify-center sm:justify-end">
                            <div className="bg-[#FFFFFF1F]  sm:translate-y-[55%] backdrop-blur-[4px] border border-[#FFFFFF26] max-w-[338px] w-full min-h-[272px] pl-[39px] pr-[28px] hover:bg-[#003E92B2] duration-500 pt-[65px]" data-aos="fade-down">
                                <p className=' font-poppins font-normal text-[16px] text-white'>You have separated and have the feeling that you can never be happy again and that you will be alone forever.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Target
