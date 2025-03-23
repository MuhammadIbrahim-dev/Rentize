import React from 'react'
import { assets } from '../../assets/Fronted/Assets'

const Feature = () => {
  return (
    <>

    <div className='pt-10 sm:pt-20 px-3 sm:px-[7vw] md:px-[9vw] lg:px-[10vw]'>
        <div className='gap-[10px] flex flex-col absolute right-4 sm:right-6 top-[400px]'>
            <div className='w-[70px] sm:w-[100px] h-[70px] sm:h-[100px] bg-[#1AA090] rotate-45 border-[8px] sm:border-[12px] outline-none mt-[-30px] border-[#121B25]'></div>
            <div className='w-[70px] sm:w-[100px] h-[70px] sm:h-[100px] bg-[#1AA090] rotate-45 border-[8px] sm:border-[12px] outline-none mt-[-30px] border-[#121B25]'></div>
            <div className='w-[70px] sm:w-[100px] h-[70px] sm:h-[100px] bg-[#1AA090] rotate-45 border-[8px] sm:border-[12px] outline-none mt-[-30px] border-[#121B25]'></div>
            <div className='w-[70px] sm:w-[100px] h-[70px] sm:h-[100px] bg-[#1AA090] rotate-45 border-[8px] sm:border-[12px] outline-none mt-[-30px] border-[#121B25]'></div>
        </div>
        <h1 className='text-[#fff] text-3xl'>Feature In</h1>
        <div className='flex justify-between pt-5'>
            <div><img src={assets.logo_1} alt="" className='w-[50px] sm:w-[100px]'/></div>
            <div><img src={assets.logo_2} alt="" className='w-[50px] sm:w-[100px]'/></div>
            <div><img src={assets.logo_3} alt="" className='w-[50px] sm:w-[100px]'/></div>
            <div><img src={assets.logo_4} alt="" className='w-[50px] sm:w-[100px]'/></div>
            <div><img src={assets.logo_5} alt="" className='w-[50px] sm:w-[100px]'/></div>
        </div>
    </div>
    </>
  )
}

export default Feature
