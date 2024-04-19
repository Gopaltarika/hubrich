import React from 'react'
import chat from "../assets/images/chat.svg";
const BigBtn = (props) => {
    return (
        <div>
            <div className={`bg-border hover:shadow-lg hover:shadow-[#8703C5] duration-500 inline-block ${props.class} cursor-pointer overflow-hidden p-[2px]`}><div className={`bg-white ${props.secondclass}`}><a href="#" className='font-Inter capitalize text-[14px] sm:text-[16px] font-medium bg-text text-transparent bg-clip-text py-1 pl-[9px] flex items-center pr-[48px]'> <img src={chat} alt="chat" /> Book a non-binding initial consultation now</a></div></div>
        </div>
    )
}

export default BigBtn
