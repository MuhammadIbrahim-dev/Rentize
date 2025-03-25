import React from 'react'
import { assets } from '../../assets/Fronted/Assets'

const HelpHome = () => {
  return (
    <div className='bg-[#1A242F] py-20'>
    <div className='px-3 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] sm:h-[400px] flex flex-wrap  sm:justify-between'>
      {/*-------------------picture__side---------------- */}
      <div className=' sm:w-[40%] gap-2 flex h-[400px]'>
        <img src={assets.Home_H_1}  className='w-[50%]' alt="" />
        <img src={assets.Home_H_2} className='w-[50%]' alt="" />
      </div>
      {/* ----------contentside--------------------- */}
      <div className='sm:w-[50%] sm:h-[400px] flex justify-center align-center items-center '>
        <div className='sm:w-[80%]'>
            <h1 className='text-4xl font-semibold text-white'>We help people to find homes</h1>
            <p className='font-normal text-xs text-[#D6D6D6] pt-10'>Mauris orci donec blandit maecenas. Orci lorem purus porttitor massa consectetur. Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue justo. Nibh laoreet volutpat quis velit. Blandit aliquam donec sed morbi congue eget lorem viverra porta id lobortis.</p>
        <button className='py-2 px-7 bg-[#1AA090] text-[#ffff] text-[10px] mt-10'>Get in Touch</button>
        </div>
      </div>
    </div>
    {/* --------------box_design---------------------- */}
<div className='sm:w-[100px] h-[50px] w-[50px] sm:h-[100px] bg-[#1AA090] border-4 outline-none border-[#121B25] overflow-hidden absolute  right-3 sm:right-6 mt-[-300px] sm:mt-[-120px] rotate-45'></div>
<div className='sm:w-[100px] h-[50px] w-[50px] sm:h-[100px] bg-[#1AA090] border-4 outline-none border-[#121B25] overflow-hidden absolute right-3 sm:right-6 mt-[-250px] sm:mt-[-85px] rotate-45'></div>
<div className='sm:w-[100px] h-[50px] w-[50px] sm:h-[100px] bg-[#1AA090] border-4 outline-none border-[#121B25] overflow-hidden absolute  right-3 sm:right-6 mt-[-200px] sm:mt-[-50px] rotate-45'></div>
    </div>
  )
}

export default HelpHome
