import React from 'react'

const Imperial = () => {
  return (
    <div>

    <div className='flex flex-wrap md:mt-8 mt-3 justify-between '>
      <div className='max-w-[48%] block relative'>
        <label htmlFor="" className='text-gray-600 text-sans text-sm'>Length</label>
        <input type="text" placeholder='0' className='w-full h-[58px] placeholder:text-gray-600 placeholder:text-3xl px-2 my-5 border-clr3 border rounded-lg placeholder:font-semibold' />
        <p className='absolute text-clr4 text-2xl top-14 right-3 font-sans font-semibold'>ft</p>
      </div>

      <div className='max-w-[48%] block relative'>
        <label htmlFor="" className='text-white text-sans text-sm '>Weight</label>
        <input type="text" placeholder='0' className='w-full h-[58px] placeholder:text-gray-600 placeholder:text-3xl px-2 my-5 border-clr3 border rounded-lg placeholder:font-semibold' />
        <p className='absolute text-clr4 text-2xl top-14 right-3 font-sans font-semibold'>in</p>
      </div>
      <div className='max-w-[48%] block relative'>
        <label htmlFor="" className='text-gray-600 text-sans text-sm'>Weight</label>
        <input type="text" placeholder='0' className='w-full h-[58px] placeholder:text-gray-600 placeholder:text-3xl px-2 my-5 border-clr3 border rounded-lg placeholder:font-semibold' />
        <p className='absolute text-clr4 text-2xl top-14 right-3 font-sans font-semibold'>st</p>
      </div>
      <div className='max-w-[48%] block relative'>
        <label htmlFor="" className='text-white text-sans text-sm'>Weight</label>
        <input type="text" placeholder='0' className='w-full h-[58px] placeholder:text-gray-600 placeholder:text-3xl px-2 my-5 border-clr3 border rounded-lg placeholder:font-semibold' />
        <p className='absolute text-clr4 text-2xl top-14 right-3 font-sans font-semibold'>lbs</p>
      </div>
    </div>


    {/* Result box */}

    <div className='bg-clr5 min-h-fit max-w-[100%] p-5 rounded-r-full text-white font-sans'>

      <h1 className=' font-semibold text-2xl'>Welcome!</h1>
      <p className='text-sm '>Enter your height and weight and you'll see your BMI result here</p>
     

    </div>


</div>
  )
}

export default Imperial