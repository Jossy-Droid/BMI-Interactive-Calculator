import React from 'react'
import profile from "../assets/images/image-man-eating.webp";
import icon1 from '../assets/images/icon-eating.svg'
import icon2 from '../assets/images/icon-exercise.svg'
import icon3 from '../assets/images/icon-sleep.svg'
import gender from '../assets/images/icon-gender.svg'
import age from '../assets/images/icon-age.svg'
import muscle from '../assets/images/icon-muscle.svg'
import preg from '../assets/images/icon-pregnancy.svg'
import race from '../assets/images/icon-race.svg'
import sleep from '../assets/images/icon-sleep.svg'

const About = () => {
  return (
    <div className='md:px-[8rem] px-10 py-10'>
      <div className=' md:flex items-center'>
        <div className='md:w-[40%]'>
          <img src={profile} alt="" width={"100%"} />
        </div>

        <div className='md:w-[60%] md:space-y-5 space-y-2 py-10 md:pl-28 md:pr-[10rem] md:mt-[6rem]'>
          <h1 className='text-[30px] md:text-left text-center md:text-[42px] font-[600] leading-10 md:leading-[52.8px] text-gray-700 font-sans -tracking-wide'>What your BMI result means</h1>
          <p className='text-[16px] leading-[24px] text-gray-500 font-[400] -tracking-wide md:text-left text-justify'>A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
        </div>
      </div>

      <div className='py-28 md:flex gap-3 md:px-8'>

        <div className='md:w-1/3 space-y-5 flex  md:flex-col  justify-between items-center md:items-baseline gap-3'>
          <img src={icon1} alt="" width={'100%'} className='w-[60px]' />
          <div className=' w-[85%] md:w-full space-y-5'>
            <h1 className='text-[24px] font-[600] leading-[29px] text-gray-800'>Healthy eating</h1>
            <p className='text-[16px] leading-[24px] text-gray-500 font-[400] -tracking-wide md:text-left text-justify'>Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.</p>


          </div>
        </div>
        <div className='md:w-1/3 space-y-5 flex  md:flex-col  justify-between items-center md:items-baseline gap-3'>
          <img src={icon2} alt="" width={'100%'} className='w-[60px]' />
          <div className='w-[85%] md:w-full space-y-5'>
            <h1 className='text-[24px] font-[600] leading-[29px] text-gray-800'>Regular exercise</h1>
            <p className='text-[16px] leading-[24px] text-gray-500 font-[400] -tracking-wide md:text-left text-justify'>Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.</p>


          </div>
        </div>
        <div className='md:w-1/3 space-y-5 flex  md:flex-col  justify-between items-center md:items-baseline gap-3'>
          <img src={icon3} alt="" width={'100%'} className='w-[60px]' />
          <div className=' w-[85%] md:w-full space-y-5'>
            <h1 className='text-[24px] font-[600] leading-[29px] text-gray-800'>Adequate sleep</h1>
            <p className='text-[16px] leading-[24px] text-gray-500 font-[400] -tracking-wide md:text-left text-justify'>Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.</p>


          </div>
        </div>
      </div>







      <div className='md:flex justify-between gap-5'>
        <div className='md:w-[40%] space-y-5'>
          <h1 className='text-[48px] font-[600] text-gray-700 md:text-left text-center'>Limitations of BMI</h1>
          <p className='text-[15px] leading-[24px] text-gray-500 font-[400] -tracking-wide md:text-left text-justify'>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>



        </div>
        <div className='md:w-[60%] space-y-10'>
          <div className='md:max-w-[40%] shadow-clr3 shadow-lg p-5 rounded-lg md:ml-[45%]'>
            <div className='flex gap-3 mb-2'>
                  <img src={gender} alt="" />
            <h1 className='text-[20px] font-[600] text-gray-700'>Gender</h1>
            </div>
            <p className='text-[16px] font-[400] leading-6 font-sans text-gray-400'>The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.</p>

          </div>


          <div className='md:flex justify-end gap-8'>
            <div className='md:max-w-[40%] shadow-clr3 shadow-lg p-5 rounded-lg'>
              <div className='flex gap-3 mb-2'>
                  <img src={age} alt="" />
              <h1 className='text-[20px] font-[600] text-gray-700'>Gender</h1>
              </div>
              <p className='text-[16px] font-[400] leading-6 font-sans text-gray-400'>The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.</p>

            </div>
            <div className='md:max-w-[40%] shadow-clr3 shadow-lg p-5 rounded-lg'>
              <div className='flex gap-3 mb-2'>
                  <img src={muscle} alt="" />
              <h1 className='text-[20px] font-[600] text-gray-700'>Gender</h1>
              </div>
              <p className='text-[16px] font-[400] leading-6 font-sans text-gray-400'>The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.</p>

            </div>
          </div>
          <div className='md:flex justify-start gap-8'>
            <div className='md:max-w-[40%] shadow-clr3 shadow-lg p-5 rounded-lg'>
              <div className='flex gap-3 mb-2'>
                  <img src={race} alt="" />
              <h1 className='text-[20px] font-[600] text-gray-700'>Gender</h1>
              </div>
              <p className='text-[16px] font-[400] leading-6 font-sans text-gray-400'>The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.</p>

            </div>
            <div className='md:max-w-[40%] shadow-clr3 shadow-lg p-5 rounded-lg'>
              <div className='flex gap-3 mb-2'>
                  <img src={preg} alt="" />
              <h1 className='text-[20px] font-[600] text-gray-700'>Gender</h1>
              </div>
              <p className='text-[16px] font-[400] leading-6 font-sans text-gray-400'>The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.</p>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About