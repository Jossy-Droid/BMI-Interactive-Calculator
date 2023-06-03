import React, { useEffect, useState } from 'react'


const Metric = () => {
const [result, setResult] = useState(0)
const [weight, setWeight] = useState(0)
const [height, setHeight] = useState(0)
const [statement, setStatement] = useState('')



useEffect(() => {


      if (weight <= 0 || height <= 0) {
        setResult('')
      }
      else{
        let x = height / 100
        let y = x * x

        setResult(weight / y )
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

}, [result, weight, height]);



  return (
    <div>

          <div className='flex gap-5 md:mt-8 mt-3'>
            <div className='max-w-[50%] block relative'>
              <label htmlFor="" className='text-gray-600 text-sans text-sm'>Height</label>

              <input type="text" placeholder='0' className='w-full h-[58px] placeholder:text-gray-600 placeholder:text-3xl px-2 my-5 border-clr3 border rounded-lg placeholder:font-semibold font-semibold  text-gray-600 text-3xl'  onChange={(e)=>setHeight(e.target.value)} />
 
              <p className='absolute text-clr4 text-3xl top-12 right-3 font-sans font-semibold'>cm</p>
            </div>

            <div className='max-w-[50%] block relative'>
              <label htmlFor="" className='text-gray-600 text-sans text-sm'>Weight</label>
              <input type="text" placeholder='0' className='w-full h-[58px] placeholder:text-gray-600 placeholder:text-3xl px-2 my-5 border-clr3 border rounded-lg font-semibold  text-gray-600 text-3xl'  onChange={(e)=> setWeight(e.target.value)} />

              

              <p className='absolute text-clr4 text-3xl top-12 right-3 font-sans font-semibold'>kg</p>
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
                    <p> Your BMI suggests you're a {statement}. Your ideal weight is between {weight-5} - {weight} </p>
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

export default Metric