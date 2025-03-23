import React from 'react'
import { assets } from '../../../assets/Fronted/Assets'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slick from './Slick';


const Clouser = () => {
  return (
    <div className='px-0 mt-20 '>
      <div className='w-full px-0 bg-cover' style={{backgroundImage:`url(${assets.cover_image})`}} >
        <div className='px-3 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] items-center text-center py-20 '>
          <Slick/>
          <button className='py-2 px-7 bg-[#1AA090] text-sm text-[#fff] font-meduim mt-6'>View All Properties</button>
        </div>
      </div>
    </div>
  )
}

export default Clouser
