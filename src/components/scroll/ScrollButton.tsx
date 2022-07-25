import React, { useState } from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';

const ScrollButton = () => {
  
    const [ visible, setVisible ] = useState(false);

    const handleVisible = () => {
        const scroll = document.documentElement.scrollTop
        if(scroll > 300){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', handleVisible);

    return (
    <div className='fixed w-full left-[90%] bottom-10 h-5 text-[40px] cursor-pointer text-button '>
        <FaArrowCircleUp onClick={handleScroll} style={{display: visible ? 'inline': 'none'}} />
    </div>
  )
}

export default ScrollButton