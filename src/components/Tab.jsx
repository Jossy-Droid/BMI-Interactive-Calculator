import React, { useState } from 'react'
import Metric from './Metric';
import Imperial from './Imperial';


const Tab = () => {
    // const [checked, setChecked] = useState()

    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };




    return (
        <div className='p-7 bg-clr2 shadow-xl shadow-clr3 md:translate-y-0  translate-y-[12rem] top-[13rem] md:top-[30%] md:left-[53%] absolute  max-w-[90%] max:translate-x-18  md:max-w-[35%] h-fit mini:translate-x-8 rounded-[20px]'>

            <div>
                <h2 className='mb-5 text-black text-2xl font-semibold'>Enter your details below</h2>
                <div className='flex justify-between'>

                    <div className='flex items-center gap-2 '>
                        <input type="radio" name="Calculation" id=""
                            className={activeTab === 1 ? 'active form-radio text-indigo-600 h-5 w-5' : 'h-5 w-5'}
                            onClick={() => handleTabClick(1)} />
                        <label htmlFor="" className=' font-semibold'>Metric</label>
                    </div>

                    <div className='flex items-center gap-2 mr-28'>
                        <input type="radio" name="Calculation" id="" value={false}
                            className={activeTab === 2 ? 'active form-radio text-indigo-600 h-5 w-5' : 'h-5 w-5'}
                            onClick={() => handleTabClick(2)} />
                        <label htmlFor="" className=' font-semibold'>Imperial</label>
                    </div>

                </div>


                <div>

                    <div className="tab-content">
                        {activeTab === 1 && <div>
                            <Metric/>
                            </div>}
                        {activeTab === 2 && <div>
                            <Imperial/>
                            </div>}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Tab