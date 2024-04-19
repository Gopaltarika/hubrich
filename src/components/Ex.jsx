import React from 'react'

const Ex = () => {
    return (
        <div className='bg-[url(./assets/images/ex-bg.webp)] bg-cover sm:bg-100 bg-no-repeat bg-center py-[70px] md:py-[106px] overflow-hidden mt-[70px] md:mt-[180px]'>
            <div className='flex flex-row flex-wrap -mx-3 justify-center'>
                <div className="bg-[#FFFFFF26] min-h-[305px] border border-[#FFFFFF26] md:w-6/12 w-11/12 px-3 backdrop-blur-sm flex flex-col justify-center items-center" data-aos="flip-up">
                    <h2 className='ff-neue text-white sm:text-[45px] text-[40px] md:text-[52px] font-normal text-center uppercase'>Are you over your EX?</h2>
                    <p className='pt-[9px] pb-[31px] text-white font-poppins font-normal text-[14px] sm:text-[16px] text-center'>Most women don't even realize how their past experiences affect their <span className='lg:block'>lives today. Assisting you to overcome this situation is what we do.</span></p>
                    <button className='sm:text-[16px] text-[14px] text-white font-medium font-Inter px-6 py-4 rounded-[68px] bg-btnEx mb-3'>Let’s find it out</button>
                </div>
            </div>
        </div>
    )
}

export default Ex
