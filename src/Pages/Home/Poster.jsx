import React from 'react';
import { assets } from '../../assets/Fronted/Assets';
// react_icons
import { IoIosArrowForward } from "react-icons/io";
const Poster = () => {
  return (
    <div className='px-3 sm:px-[7vw] md:px-[9vw] lg:px-[10vw]'>
      {/* ------------------------first_section_home------------------------- */}
      <div className=' flex flex-col sm:flex sm:flex-row justify-between flex-col-reverse px-4 mt-5'>
        <div className='w-full sm:w-[45%] pt-5 flex'>
          {/* -------------------info------------------------------- */}
            <div className='w-5/6 flex justify-center align-center flex-col items-center text-left absolute top-40 sm:top-0 pl-5 sm:relative'>
            <h1 className='text-[#1AA090] sm:text-white font-semibold text-4xl'>Perfect way to buy and sell a home</h1>
            <p className='text-xs text-[#D6D6D6] pt-4 sm:pt-3 w-full '>Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliqua dui pellentesque. Ac, gravida in eget non amet eget purus non.</p>
            
             {/* ---------------------------search__bar------------------------- */}
        <div className='flex justify-between text-center gap-[2px] sm:gap-[47px]  items-center bg-[#ffff] mt-7 sm:mt-3 sm:ml-[62%]'>
          <div className='p-1 sm:p-3'>
            <p className='flex text-center items-center text-[9px] sm:text-xs text-[#858585] cursor-pointer '>Purpose <span><IoIosArrowForward className=' cursor-pointer text-[#1AA090] rotate-90 ml-1'/></span></p>
            <div className='text-[#121B25] font-semibold text-xs sm:text-sm'><p>Buy</p></div>
          </div>
          <div className='p-1 sm:p-3'>
            <p className='flex text-center items-center text-[9px] sm:text-xs text-[#858585] cursor-pointer '>Location <span><IoIosArrowForward className=' cursor-pointer text-[#1AA090] rotate-90 ml-1'/></span></p>
            <div className='text-[#121B25] font-semibold text-xs sm:text-sm'><p>Tornoto,Canada</p></div>
          </div>
          <div> 
          <div className='p-1 sm:p-3'>
            <p className='flex text-center items-center text-[9px] sm:text-xs text-[#858585] cursor-pointer '>Type <span><IoIosArrowForward className=' cursor-pointer text-[#1AA090] rotate-90 ml-1'/></span></p>
            <div className='text-[#121B25] font-semibold text-xs sm:text-sm'><p>Industrial,Home</p></div>
          </div>
          </div>
          <button className='py-2 sm:py-4 px-4 sm:px-6 bg-[#1AA090] m-1 text-[#ffff]'>Search</button>
        </div>
        </div>
        </div>
        {/* ----------------image_section-------------------- */}
        <div className='w-full sm:w-[50%]'>
        <img src={assets.H_banner} className='w-full' alt="" />
        </div>
       
      </div>
    </div>
  );
}

export default Poster;
