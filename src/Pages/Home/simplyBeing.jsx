import React from 'react'

const SimplyBeing = () => {
  return (
    <div className='px-3 ms:px-[5vw] md:px-[7vw] lg:px-[9vw] flex flex-wrap'>
        {/* ---------------left_side------------------------ */}
      <div className='sm:w-[50%] flex justify-center sm:py-20'>
        <h1 className='font-semibold  text-[#ffff] text-[44px] sm:w-[70%]'>Let’s simply begin with rentiz.</h1>
      </div>
      {/* -------------right_side---------------------- */}
      <div className='sm:w-[40%] sm:py-20'>
        <p className='w-[80%] font-normal text-[#D6D6D6]  text-[12px]'>Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue justo. Nibh laoreet volutpat quis velit. Blandit aliquam donec sed morbi congue eget lorem viverra porta id lobortis.</p>
      <button className=' mt-6 py-3 px-7 bg-[#1AA090] text-[#ffff] text-[10px]'>Get Started</button>
      </div>
      {/* ---------------box_design------------------------- */}
      <div className='w-[500px] h-[500px] bg-transparent border border-[#1AA090] absolute overflow-hidden left-[-300px] mt-[30px]   rounded-[50%]'></div>
      <div className='w-[500px] h-[500px] bg-transparent border border-[#1AA090] absolute overflow-hidden left-[-350px] mt-[80px]  rounded-[44%]'></div>
      <div className='w-[500px] h-[500px] bg-transparent border border-[#1AA090] absolute overflow-hidden left-[-400px] mt-[100px] rounded-[50%]'></div>
    </div>
  )
}

export default SimplyBeing
