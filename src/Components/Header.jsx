import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/Fronted/Assets";
// react_icons
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [show,setShow]=useState(false);
  return (
    <div className="px-3 sm:px-[7vw] md:px-[9vw] lg:px-[10vw]">
      {/* ------------------------navbar--------------------------- */}
      <nav className="w-full h-[70px] ">
        <div className="flex justify-between items-center w-full h-full px-4">
          {/* --------------------logo------------------------------ */}
        <div className="Logo">
            <NavLink to={'/'}><img src={assets.logo} alt="" className="w-25 sm:w-[150px]" /></NavLink>
        </div>
        {/* ---------------------links--------------------------------- */}
        <ul className="hidden sm:flex text-white gap-4 text-[12px]">
            <li><NavLink to={'/'}>
            <p>Home</p>
            <hr  className=" w-2/2 h-[3px] border-none bg-[#1AA090] mt-1 hidden"/>
            </NavLink>
            </li>
            <li><NavLink to={'/AboutUs'}>
            <p>AboutUs</p>
            <hr  className="W-2/4 h-[3px] border-none bg-[#1AA090] mt-1 hidden"/>
             </NavLink>
             </li>
            <li><NavLink to={'/Buying'}>
            <p>Buying</p>
            <hr className="W-2/4 h-[3px] border-none bg-[#1AA090] mt-1 hidden"/>
            </NavLink>
             </li>
            <li><NavLink to={'/Rent'}>
            <p>Renting</p>
            <hr  className="W-2/4 h-[3px] border-none bg-[#1AA090] mt-1 hidden"/>
            </NavLink>
             </li>
            <li><NavLink to={'/Selling'}>
            <p>Selling</p>
            <hr  className="W-2/4 h-[3px] border-none bg-[#1AA090] mt-1 hidden"/>
            </NavLink>
             </li>
            <li><NavLink to={'/ContactUs'}>
            <p>ContactUs</p>
             <hr  className="W-2/4 h-[3px] border-none bg-[#1AA090] mt-1 hidden"/>
            </NavLink>
             </li>
        </ul>
        {/* -----------------------login_signup_links----------------------- */}
        <div className="text-white flex gap-2 text-xs sm:text-sm">
            <button className="sm:py-2 py-1 px-2 sm:px-7 ease-in duration-600 hover:bg-[#1AA090] border border-[#1AA090] text-[#ffff]  "><Link to={'/Login'}>Login</Link></button>
            <button className="sm:py-2 py-1 px-2 sm:px-7 bg-[#1AA090] ease-in duration-600 hover:bg-transparent border border-[#1AA090] "><Link to={'/Signup'}>Signup</Link></button>
            {/* -------------------menu_bar_icon_close_icon------------------- */}
        <div className=" text-[#ffff]  text-3xl sm:hidden ">
          {show ? <IoMdClose className="cursor-pointer" onClick={()=>setShow(!show)}/> : <CiMenuFries  className="cursor-pointer" onClick={()=>setShow(!show)}/> }
        
        </div>
        </div>
        {/* ---------------------mobile_device_links---------------------------- */}
        <div className={
          show ? ' fixed z-[100] right-2 top-[10%] w-40 bg-[#ffff] text-[#000] rounded p-[10px] ease-in duration-600 flex flex-col py-[20px] sm:hidden ' : ' hidden right-[100%] top-0'
        }>
          {/* -----------------------links--------------------------------- */}
           <ul className=" flex-col sm:hidden text-black gap-2 text-sm flex">
            
            <li><NavLink to={'/'}  onClick={()=>setShow(!show)} >
            <p>Home</p>
            </NavLink>
            </li>
            
            <li><NavLink to={'/AboutUs'} onClick={()=>setShow(!show)} >
            <p>AboutUs</p>
             </NavLink>
             </li>
            
            <li><NavLink to={'/Buying'} onClick={()=>setShow(!show)} >
            <p>Buying</p>
            </NavLink>
             </li>
            
            <li><NavLink to={'/Rent'}  onClick={()=>setShow(!show)}>
            <p>Renting</p>
            </NavLink>
             </li>
            <li><NavLink to={'/Selling'} onClick={()=>setShow(!show)} >
            <p>Selling</p>
            </NavLink>
             </li>
            <li><NavLink to={'/ContactUs'} onClick={()=>setShow(!show)} >
            <p>ContactUs</p>
            </NavLink>
             </li>
        </ul>
        </div>
        </div>
      </nav>
    </div>
  );
};
// header_will_be_completed_

export default Header;
