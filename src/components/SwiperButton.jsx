import React from 'react'
import { useSwiper } from 'swiper/react';

const SwiperButton = () => {
    const swiper = useSwiper();
    return (
        <div>
            <div className=" absolute bottom-[3%] left-[-7%] w-full  justify-between max-w-[100px] flex items-center">
                <button
                    onClick={() => swiper.slidePrev()}
                    className=" relative z-10 px-2"
                >
                    <svg width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 1.25098L2 18.251L20 35.251" stroke="#9800B0" strokeWidth="1.5" />
                    </svg>
                </button>
                <button
                    onClick={() => swiper.slideNext()}
                    className=" relative z-10 px-2"
                >
                    <svg width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.25098L19 18.251L1 35.251" stroke="white" strokeWidth="1.5" />
                    </svg>

                </button>
            </div>{" "}
        </div>
    )
}

export default SwiperButton
