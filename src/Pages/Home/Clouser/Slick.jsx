import React from 'react'
import Slider from 'react-slick';
import { assets } from '../../../assets/Fronted/Assets';
import { GiBed } from "react-icons/gi";
import { LuBath } from "react-icons/lu";
import { LuImageUpscale } from "react-icons/lu";

const Slick = () => {
    // ------------------images_import--------------------
    const {image_1,image_2,image_3} = assets;

    //--------------------post_Api-------------------------
    const Posts = [
        {
            image: image_1,
            title:'Aliva Priva Jalvin',
            discription:'1087 Pin Oak Drive, Clinton, USA',
            Beds:4,
            Bath:2,
            sqft:1203,
        },
        {
            image: image_2,
            title:'Hard line orchar',
            discription:'1087 Pin Oak Drive, Clinton, USA',
            Beds:4,
            Bath:2,
            sqft:1203,
        },
        {
            image: image_3,
            title:'Allpine lenevote',
            discription:'1087 Pin Oak Drive, Clinton, USA',
            Beds:4,
            Bath:2,
            sqft:1203,
        },
    ]
    //-----------------curosal_variable-----------------------
    var settings = {
        dots: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false

      };
  return (
    <div className='px-3 [10px] pt-2:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Slider {...settings}>
      {Posts.map((v,i)=>{
        console.log(v.image);
        
            return(
                <div className='p-2 outline-none cursor-pointer text-left'>
                <img src={v.image} className='' alt=""  />
                <h1 className='text-[#FFFFFF] pt-2 font-lg  text-sm sm:font-meduim'>{v.title}</h1>
                <p className='text-[#D6D6D6] text-[8px] sm:text-[10px] pt-2'>{v.discription}</p>
                <div className='flex gap-2 text-[#1AA090] text-[6px] sm:text-[9px] pt-2'>
                    <span className='flex items-center'><GiBed  className=' text-[10px] sm:text-[13px]'/><p className=' pl-1 text-[#FFFF]'>{v.Beds}Beds</p></span>
                    <span className='flex items-center'><LuBath  className=' text-[10px] sm:text-[13px]'/><p className=' pl-1 text-[#FFFF]'>{v.Bath}Bath</p></span>
                    <span className='flex items-center'><LuImageUpscale  className=' text-[10px] sm:text-[13px]'/><p className=' pl-1 text-[#FFFF]'>{v.sqft}Sqft</p></span>
                    </div>
                </div>
            )
        })}
    </Slider>
    </div>
  )
}

export default Slick
