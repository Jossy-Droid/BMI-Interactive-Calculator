import React from 'react'
import Tab from './Tab'

import logo from '../assets/images/logo.svg'

const Home = () => {
  return (
    <div className='md:flex relative'>

            <div className='   md:max-w-[65%] bg-gradient-to-r from-clr2 to-clr3 h-[27rem] md:h-[40rem] rounded-br-[45px] md:px-[8rem] px-[2rem] md:py-[4rem] py-[2rem]'>

              <img src={logo} alt="" width={'100%'} className='max-w-[4rem] md:mb-28 mb-5 mx-auto md:mx-0' />

              <h1 className='text-black font-sans font-[600]  tracking-[-4px] leading-none text-[40px] md:text-[64px] mb-10 text-center md:text-left'>Body Mass Index Calculator</h1>

             <p className='text-gray-500 md:pr-[17rem] text-center md:text-left'> Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>

            </div>
            <div className=' md:max-w-[35%] bg-clr2  max-h-fit'>
              

            </div>
            <Tab />



    </div>
  )
}

export default Home