import React, { useEffect, useState } from 'react'




const Imperial = () => {
const [result, setResult] = useState(0)
const [kgweigth, setKgWeigth] = useState(0)
const [heightft, setHieghtft] = useState(0)

const [mainHieght, setMainHieght] = useState(0)
const [mainWeight, setMainWeight] = useState(0)
const [statement, setStatement] = useState('')

useEffect(() => {

  let realHieght = heightft * 12
  let finalHiegth = realHieght * realHieght
  setMainHieght(finalHiegth)
  console.log(finalHiegth)
  


    let realWeigth = kgweigth * 2.205
    setMainWeight(realWeigth)

  if (mainWeight <= 0 || mainHieght <= 0) {
    setResult('')
  }
  else{
        
    setResult(mainHieght * mainHieght * 706)
    console.log(result)
  }



  
  if(result === 0 || result < 18.5){
    setStatement('Underweight')
}

else if ( result >= 18.5 && result <= 25 ) {
  setStatement('Normal')
}

else if ( result >= 25 && result <= 30 ) {
  setStatement('Overweighth')
}
else if ( result >= 30 && result <= 35 ) {
  setStatement('Obese')
}

else{
  setStatement('Obese II')
}

}, [heightft, kgweigth, result, mainHieght, mainWeight])

// heightft, kgweigth, result




  return (
    <div>

    <div className='flex flex-wrap md:mt-8 mt-3 justify-between '>
      <div className='max-w-[48%] block relative'>
        <label htmlFor="" className='text-gray-600 text-sans text-sm'>height</label>
        <input type="text" placeholder='0' className='w-full h-[58px] placeholder:text-gray-600 placeholder:text-3xl px-2 my-5 border-clr3 border rounded-lg placeholder:font-semibold font-semibold  text-gray-900 text-3xl' onChange={(e)=>setHieghtft(e.target.value)} />
        <p className='absolute text-clr4 text-2xl top-14 right-3 font-sans font-semibold '>ft</p>
      </div>

      <div className='max-w-[48%] block relative'>
        <label htmlFor="" className='text-white text-sans text-sm '>height</label>
        <input type="text" placeholder={mainHieght.toString().substring(0, 6)} disabled className='w-full h-[58px] placeholder:text-gray-600 placeholder:text-3xl px-2 my-5 border-clr3 border rounded-lg placeholder:font-semibold' />
        <p className='absolute text-clr4 text-2xl top-14 right-3 font-sans font-semibold'>in</p>
      </div>
      <div className='max-w-[48%] block relative'>
        <label htmlFor="" className='text-gray-600 text-sans text-sm'>Weight</label>
        <input type="text" className='w-full h-[58px] placeholder:text-gray-600 placeholder:text-3xl px-2 my-5 border-clr3 border rounded-lg placeholder:font-semibold font-semibold  text-gray-900 text-3xl' onChange={(e)=>setKgWeigth(e.target.value)} />
        <p className='absolute text-clr4 text-2xl top-14 right-3 font-sans font-semibold'>st</p>
      </div>
      <div className='max-w-[48%] block relative'>
        <label htmlFor="" className='text-white text-sans text-sm'>Weight</label>
        <input type="text" className='w-full h-[58px] placeholder:text-gray-600 placeholder:text-3xl px-2 my-5 border-clr3 border rounded-lg placeholder:font-semibold' disabled placeholder={mainWeight.toString().substring(0, 6)} />
        <p className='absolute text-clr4 text-2xl top-14 right-3 font-sans font-semibold'>lbs</p>
      </div>
    </div>


    {/* Result box */}

    <div className='bg-clr5 min-h-fit max-w-[100%] p-5 rounded-r-full text-white font-sans'>

    {
              
              result ? (
                <div className='flex justify-between text-justify'>
                <div className='max-w-[40%]'>
                  <p className='text-1xl'> Your BMI is...</p>
                  <h1 className='text-3xl font-bold font-sans'> {result.toString().substring(0, 5)}</h1>
                </div>

                
                <div className='max-w-[60%]'>
                  <p> Your BMI suggests you're {statement}. Your ideal weight is between {mainWeight-5} - {mainWeight} </p>
                </div>

                </div>
              )
              
              : (
                <> 
                <h1 className=' font-semibold text-2xl'>Welcome!</h1>
                <p className='text-sm '>Enter your height and weight and you'll see your BMI result here</p>
                </>
              )
            
          }
     

    </div>


</div>
  )
}

export default Imperial