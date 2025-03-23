import React from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { GiPriceTag } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ChouseUs = () => {
    //--------------------post_api--------------------------
    const posts = [
        {
            icon: <BiSearchAlt />,
            title: 'Easy to find',
            discription: 'Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.'
        },
        {
            icon: <GiPriceTag />,
            title: 'Affordable Prices',
            discription: 'Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.'
        },
        {
            icon: <FaTruckFast />,
            title: 'Quickly Process',
            discription: 'Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.'
        },
    ]
  return (
    <div className='px-3 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className=' text-center  flex flex-col py-10'>
        <h1 className='text-[#ffff] text-2xl pb-10'>Why to choose us </h1>
        <div className='flex justify-center text-center items-center w-full'>
            <div className='flex sm:justify-between sm:w-[70%]'>
                {posts.map((v,index)=>{
                    return (
                        <div className='flex flex-col items-center'>
                        <div className='p-5 w-[70px] sm:w-[100px] h-[70px] sm:h-[100px] opacity-20 bg-[#1AA090] text-5xl  text-center items-center flex justify-center rounded-full'>{v.icon}</div>
                        <h1 className='pt-3 text-center text-[#ffff] items-center'>{v.title}</h1>
                        <p className='text-[#D6D6D6] text-[9px] font-normal pt-2'>{v.discription}</p>
                        </div>
                    )
                })}
            </div>
        </div>
         {/* ----------box_design-------------------- */}
         <div className= 'w-[250px] sm:w-[500px] h-[250px]  sm:h-[500px] overflow-hidden bg-transparent p-20 border-2 border-[#1AA090] absolute rotate-45 mt-60  sm:mt-0  ml-[-35%]'></div>
        <div className= 'w-[250px] sm:w-[500px] h-[250px]  sm:h-[500px] overflow-hidden bg-transparent p-20 border-2 border-[#1AA090] absolute ml-[-40%] mt-60  sm:mt-0 rotate-45 '></div>
        <div className= 'w-[250px] sm:w-[500px] h-[250px]  sm:h-[500px] overflow-hidden bg-transparent p-20 border-2 border-[#1AA090] absolute ml-[-45%] mt-60  sm:mt-0 rotate-45  '></div>

        <div className='sm:w-[50%] ml-[30%]'><p className='text-left text-[50px] sm:text-[100px] text-[#1AA090]'>“</p>
        <p className='text-[#FFFFFF] text-sm p-0'>Massa semper non rutrum orci facilisi sit. Lectus porta quam a fringilla eget viverra sem. Vulputate massa hendrerit turpis gravida tempor, porttitor.</p>
        {/* --------------autor_detail-------------------- */}
        <div className='text-sm text-left pt-2'><h1 className='text-[#fff] font-normal'>Elena Pravo</h1>
        <p className='text-[12px] text-[#D6D6D6]'>Ceo, Upstate</p></div>
                {/* -----------arrows------------------------- */}
                <div className='flex items-center right-20 sm:right-80 mt-[-20px] absolute'>
        <MdOutlineKeyboardArrowLeft  className='text-3xl text-[#767F89]'/><span className='border-none w-[20px] h-[1px] bg-[#fff]  rotate-90'></span>
        <MdOutlineKeyboardArrowRight className='text-3xl text-white'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ChouseUs
