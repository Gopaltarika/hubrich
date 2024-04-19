import React from 'react';
import BigBtn from './BigBtn';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import SwiperButton from './SwiperButton';

const Analysis = () => {
    const swiper = useSwiper();
    return (
        <div className='relative'>
            <div className='container relative z-[1]'>
                <div className='flex max-md:hidden flex-col items-end'>
                    <p className='-rotate-90 inline-block font-light text-[20px] font-poppins mb-4 mt-4 mr-[10px]'>MJH</p>
                    <div className='flex items-end'>
                        <div className='flex items-baseline mb-[-7px]'>
                            <p className='ff-neue text-[16px] xl:text-[20px] font-normal text-black uppercase'>analysis</p>
                            <p className='ff-neue font-normal text-[40px] rotate-90 inline-block mb-[-15px]'>04</p>
                        </div>
                        <div className='border-e-2 h-[269px] mr-[30px] w-[26px] border-b-2 border-[#F77B0B]'></div>
                    </div>
                </div>
                <div className="items-center mt-16 max-md:flex hidden gap-3" data-aos="fade-down">
                    <p className='ff-neue font-normal text-[40px]'>04</p>
                    <p className='ff-neue text-[16px] xl:text-[20px] font-normal text-black uppercase'>analysis</p>
                    <hr className='bg-[#F77B0B] h-[2px] w-[50px]' />
                </div>
                <div className="flex flex-row flex-wrap justify-center -mx-3">
                    <div className="lg:w-6/12 px-3 w-full flex flex-col justify-center">
                        <p className='ff-neue font-normal text-[29px] text-black' data-aos="fade-down">THE FOUR PHASES OF</p>
                        <h2 className='ff-neue font-medium text-[52px] leading-[53px] text-black' data-aos="fade-down">SEPARATION <span className='text-[#F77B0B] block'>MINDSET</span></h2>
                        <p className='text-black text-[16px] font-poppins opacity-70 font-normal max-w-[484px] pt-[19px] pb-[36px]' data-aos="fade-down">There are 4 typical separation phases. The 4 phases are not always clearly separated from each other and can overlap.</p>
                        <BigBtn class="rounded-[63px]" secondclass="rounded-[63px]" />
                    </div>
                    <div className="lg:w-6/12 px-3 sm:w-9/12 w-11/12 relative py-10">

                        <Swiper
                            modules={[Pagination, EffectCube]}
                            speed={1000}
                            pagination={{ clickable: true }}
                            effect="cube"
                            loop={true}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            className='cube'
                        >

                            <SwiperSlide className='bg-[url(./assets/images/slide-b.webp)] bg-no-repeat bg-100 min-h-[350px] md:min-h-[608px] flex flex-col items-center justify-center'>
                                <p className='text-white font-medium font-poppins text-[20px] text-center'><span className='block'>1st phase</span> "The not-wanting-to-be-true"</p>
                                <p className='text-white font-poppins font-normal text-[16px] text-center'>This phase is characterized by denial and <span className='block'>ignoring the final separation.</span></p>
                            </SwiperSlide>
                            <SwiperSlide className='bg-[url(./assets/images/slide-b.webp)] bg-no-repeat bg-100 min-h-[350px] md:min-h-[608px] flex flex-col items-center justify-center'>
                                <p className='text-white font-medium font-poppins text-[20px] text-center'><span className='block'>2nd Phase</span> "The Emotional Chaos"</p>
                                <p className='text-white font-poppins font-normal text-[16px] text-center max-w-[364px]'>
                                    The Second Phase Is Characterized By Strong
                                    Mood Swings And Disorientation.</p>
                            </SwiperSlide>
                            <SwiperSlide className='bg-[url(./assets/images/slide-b.webp)] bg-no-repeat bg-100 min-h-[350px] md:min-h-[608px] flex flex-col items-center justify-center'>
                                <p className='text-white font-medium font-poppins text-[20px] text-center'><span className='block'>3rd Phase</span> "The Reconstruction"</p>
                                <p className='text-white font-poppins font-normal text-[16px] text-center max-w-[364px]'>Apart From Occasional Setbacks, You Now
                                    Begin To Actively Take Control Of Your Life
                                    Again.</p>
                            </SwiperSlide>
                            <SwiperSlide className='bg-[url(./assets/images/slide-b.webp)] bg-no-repeat bg-100 min-h-[350px] md:min-h-[608px] flex flex-col items-center justify-center'>
                                <p className='text-white font-medium font-poppins text-[20px] text-center'><span className='block'>4th Phase</span> "The New Concept Of Life"</p>
                                <p className='text-white font-poppins font-normal text-[16px] text-center max-w-[364px]'>Through The Breakup You Have Learned To
                                    Find Your Strengths. You Develop A New
                                    Concept Of Love And Partnership. You Have
                                    Now Gained The Freedom To Be Yourself And
                                    Live Your Life.</p>
                            </SwiperSlide>
                            <SwiperButton />
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analysis;