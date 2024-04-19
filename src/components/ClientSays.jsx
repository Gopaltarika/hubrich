import React from 'react'
import girl from "../assets/images/slide-girl.webp";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import doble from "../assets/images/doblecout.webp";

const ClientSays = () => {
    const swiper = useSwiper();
    const isMobile = window.innerWidth <= 767;
    return (
        <div className='md:pt-[180px] pt-[70px]'>
            <div className="container relative pb-[70px] md:pb-[200px]">
                <div className='flex flex-col items-end max-md:hidden absolute top-[-20%] right-0'>
                    <p className='-rotate-90 inline-block font-light text-[20px] font-poppins mb-4 mt-4 mr-[10px]'>MJH</p>
                    <div className='flex items-end'>
                        <div className='flex items-baseline mb-[-7px]'>
                            <p className='ff-neue font-normal text-[40px] rotate-90 inline-block mb-[-10px]'>06</p>
                        </div>
                        <div className='border-e-2 h-[201px] mr-[30px] w-[26px] border-b-2 border-[#F77B0B]'></div>
                    </div>
                </div>
                <div className="items-center mt-3 max-md:flex hidden gap-3" data-aos="fade-down">
                    <p className='ff-neue font-normal text-[40px]'>06</p>
                    <hr className='bg-[#F77B0B] h-[2px] w-[50px]' />
                </div>
                <h2 className='text-black text-center text-[52px] ff-neue font-normal uppercase pb-[84px]' data-aos="fade-down">What our <span className='text-[#F77B0B]'>clients</span> say</h2>
                <img src={doble} alt="doble-cout" className='max-w-[98px] min-h-[69px] absolute z-10 top-[22%] right-[0%]' />
                <Swiper
                    direction={isMobile ? 'horizontal' : 'vertical'}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    modules={[Pagination, EffectCube]}
                    effect={isMobile ? 'slide' : 'cube'}
                    slidesPerView={1}
                    cubeEffect={{
                        shadow: false,
                        slideShadows: false,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    className="w-full h-[650px] max-md:h-[900px] max-md:pt-12 mySwiper overflow-hidden"
                >
                    <SwiperSlide>
                        <div className='flex flex-row flex-wrap -mx-3 justify-center'>
                            <div className='w-full px-3'>
                                <div className="shadow-[0px_2px_48px_0px_#00000014] bg-white w-full visible min-h-[300px] px-3 sm:px-[50px] flex flex-col items-center">
                                    <img className='translate-y-[-55%]' width={86} height={86} src={girl} alt="girl-img" />
                                    <p className='max-w-[721px] text-black opacity-70 font-poppins font-normal text-center mt-[-15px] translate-z'>Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </p>
                                    <p className=' font-poppins font-medium text-center text-[14px] sm:text-[16px] text-black pt-4 pb-[2px]'>Marrie James-CEO</p>
                                    <p className='text-black opacity-70 font-normal font-poppins text-center text-[14px] sm:text-[16px]'>Limana Enterprises, CA</p>
                                </div>
                                <div className="flex flex-row flex-wrap pt-5">
                                    <div className="md:w-6/12 w-full md:pr-[10px]">
                                        <div className="shadow-[0px_2px_48px_0px_#00000014] px-4 pt-[25px] min-h-[207px] bg-white w-full flex flex-col items-center">
                                            <p className='max-w-[328px] font-poppins font-normal opacity-70 text-black text-[14px] sm:text-[16px] text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                            <p className=' font-poppins font-medium text-center text-[14px] sm:text-[16px] text-black pt-[19px] pb-[2px]'>Ralph Edwards-CEO</p>
                                            <p className='text-black opacity-70 font-normal font-poppins text-center text-[14px] sm:text-[16px]'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                    <div className="md:w-6/12 w-full max-md:pt-5 md:pl-[10px]">
                                        <div className="shadow-[0px_2px_48px_0px_#00000014] px-4 pt-[25px] min-h-[207px] bg-white w-full flex flex-col items-center">
                                            <p className='max-w-[328px] font-poppins font-normal opacity-70 text-black text-[14px] sm:text-[16px] text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                            <p className=' font-poppins font-medium text-center text-[14px] sm:text-[16px] text-black pt-[19px] pb-[2px]'>Darrell Steward-Head</p>
                                            <p className='text-black opacity-70 font-normal font-poppins text-center text-[14px] sm:text-[16px]'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-row flex-wrap -mx-3 justify-center'>
                            <div className='w-full px-3'>
                                <div className="shadow-[0px_2px_48px_0px_#00000014] bg-white w-full visible min-h-[300px] px-3 sm:px-[50px] flex flex-col items-center">
                                    <img className='translate-y-[-55%]' width={86} height={86} src={girl} alt="girl-img" />
                                    <p className='max-w-[721px] text-black opacity-70 font-poppins font-normal text-center mt-[-15px] translate-z'>Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </p>
                                    <p className=' font-poppins font-medium text-center text-[14px] sm:text-[16px] text-black pt-4 pb-[2px]'>Marrie James-CEO</p>
                                    <p className='text-black opacity-70 font-normal font-poppins text-center text-[14px] sm:text-[16px]'>Limana Enterprises, CA</p>
                                </div>
                                <div className="flex flex-row flex-wrap pt-5">
                                    <div className="md:w-6/12 w-full md:pr-[10px]">
                                        <div className="shadow-[0px_2px_48px_0px_#00000014] px-4 pt-[25px] min-h-[207px] bg-white w-full flex flex-col items-center">
                                            <p className='max-w-[328px] font-poppins font-normal opacity-70 text-black text-[14px] sm:text-[16px] text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                            <p className=' font-poppins font-medium text-center text-[14px] sm:text-[16px] text-black pt-[19px] pb-[2px]'>Ralph Edwards-CEO</p>
                                            <p className='text-black opacity-70 font-normal font-poppins text-center text-[14px] sm:text-[16px]'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                    <div className="md:w-6/12 w-full max-md:pt-5 md:pl-[10px]">
                                        <div className="shadow-[0px_2px_48px_0px_#00000014] px-4 pt-[25px] min-h-[207px] bg-white w-full flex flex-col items-center">
                                            <p className='max-w-[328px] font-poppins font-normal opacity-70 text-black text-[14px] sm:text-[16px] text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                            <p className=' font-poppins font-medium text-center text-[14px] sm:text-[16px] text-black pt-[19px] pb-[2px]'>Darrell Steward-Head</p>
                                            <p className='text-black opacity-70 font-normal font-poppins text-center text-[14px] sm:text-[16px]'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-row flex-wrap -mx-3 justify-center'>
                            <div className='w-full px-3'>
                                <div className="shadow-[0px_2px_48px_0px_#00000014] bg-white w-full visible min-h-[300px] px-3 sm:px-[50px] flex flex-col items-center">
                                    <img className='translate-y-[-55%]' width={86} height={86} src={girl} alt="girl-img" />
                                    <p className='max-w-[721px] text-black opacity-70 font-poppins font-normal text-center mt-[-15px] translate-z'>Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </p>
                                    <p className=' font-poppins font-medium text-center text-[14px] sm:text-[16px] text-black pt-4 pb-[2px]'>Marrie James-CEO</p>
                                    <p className='text-black opacity-70 font-normal font-poppins text-center text-[14px] sm:text-[16px]'>Limana Enterprises, CA</p>
                                </div>
                                <div className="flex flex-row flex-wrap pt-5">
                                    <div className="md:w-6/12 w-full md:pr-[10px]">
                                        <div className="shadow-[0px_2px_48px_0px_#00000014] px-4 pt-[25px] min-h-[207px] bg-white w-full flex flex-col items-center">
                                            <p className='max-w-[328px] font-poppins font-normal opacity-70 text-black text-[14px] sm:text-[16px] text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                            <p className=' font-poppins font-medium text-center text-[14px] sm:text-[16px] text-black pt-[19px] pb-[2px]'>Ralph Edwards-CEO</p>
                                            <p className='text-black opacity-70 font-normal font-poppins text-center text-[14px] sm:text-[16px]'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                    <div className="md:w-6/12 w-full max-md:pt-5 md:pl-[10px]">
                                        <div className="shadow-[0px_2px_48px_0px_#00000014] px-4 pt-[25px] min-h-[207px] bg-white w-full flex flex-col items-center">
                                            <p className='max-w-[328px] font-poppins font-normal opacity-70 text-black text-[14px] sm:text-[16px] text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                            <p className=' font-poppins font-medium text-center text-[14px] sm:text-[16px] text-black pt-[19px] pb-[2px]'>Darrell Steward-Head</p>
                                            <p className='text-black opacity-70 font-normal font-poppins text-center text-[14px] sm:text-[16px]'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='flex flex-col absolute bottom-0 max-md:hidden lg:bottom-[3%] z-10 items-start'>
                    <p className='-rotate-90 inline-block font-light text-[20px] font-poppins mb-5'>MJH</p>
                    <div className='flex items-end ml-5'>
                        <div className='border-s-2 h-[200px] 2xl:h-[269px] w-[26px] border-b-2 border-[#F77B0B]'></div>
                        <div className='flex items-baseline mb-[-7px]'>
                            <p className=' ff-neue font-normal text-[25px] xl:text-[40px] -rotate-90 inline-block mb-[-15px]'>07</p>
                            <p className=' ff-neue text-[14px] sm:text-[16px] xl:text-[20px] font-normal text-black uppercase'>take step</p>
                        </div>
                    </div>
                </div>
                <div className="items-center mt-4 max-md:flex hidden gap-3" data-aos="fade-down">
                    <p className='ff-neue font-normal text-[40px]'>07</p>
                    <p className='ff-neue text-[16px] xl:text-[20px] font-normal text-black uppercase'>take step</p>
                    <hr className='bg-[#F77B0B] h-[2px] w-[50px]' />
                </div>
            </div>
        </div>

    )
}

export default ClientSays;
