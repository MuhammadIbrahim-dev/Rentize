import React from 'react'
import { assets } from '../assets/Fronted/Assets'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='px-3 sm:px-[5vw] md:px-[7vw] lg-px-[9vw] bg-[#1A242F]  z-10000000 absolute'>
      <div className='grid grid-cols-[3fr_2fr_2fr]  sm:grid-cols-[3fr_1fr_1fr_1fr_1fr] gap-10 py-20 '>
        <div>
            <img src={assets.logo} alt="" />
            <p className='text-[10px] text-[#D6D6D6] pt-5'>Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue.</p>
            <div className='flex gap-3 mt-5 text-[#D6D6D6]'>
            <span><FaFacebook /></span>
            <span><FaInstagram /></span>
            <span><FaTwitter /></span>
            <span><FaYoutube /></span>
            </div>
        </div>
        <div className='text-[#ffff]'>
            <p className='text-sm font-semibold'>Project</p>
            <ul className='text-[#D6D6D6] text-[13px] gap-4'>
            <li>Houses</li>
            <li>Rooms</li>
            <li>Flats</li>
            <li>Appartments</li>
            </ul>
        </div>
        <div  className='text-[#ffff]'>
            <p  className='text-sm font-semibold'>Company</p>
            <ul className='text-[#D6D6D6] text-[13px] gap-4'>
            <li>How we work ?</li>
            <li>Capital</li>
            <li>Security</li>
            </ul>
        </div>
<div  className='text-[#ffff]'>
    <p  className='text-sm font-semibold'>Movement</p>
    <ul className='text-[#D6D6D6] text-[13px] gap-4'>
    <li>Who are we support Us</li>
    </ul>
</div>
<div  className='text-[#ffff]'>
    <p  className='text-sm font-semibold'>Help</p>
    <ul className='text-[#D6D6D6] text-[13px] gap-4'>
        <li>Privacy</li>
        <li>Condition</li>
        <li>Blog</li>
        <li>FaQ</li>
    </ul>
</div>
      </div>
    </div>
  )
}

export default Footer
