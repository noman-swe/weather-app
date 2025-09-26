import React from 'react'
import { icons } from '../../public/icons/icons'

const Header = (register handleSubmit reset={reset} onSubmit={onSubmit}) => {
    return (
        <div className=' w-full '>
            <div className='flex items-center justify-between'>
                <div className='flex items-center '>
                    {icons?.sunnyWeather}
                    <p className="font-roboto font-semibold text-2xl leading-none tracking-normal ps-3 text-white">
                        Weather Today
                    </p>
                </div>

                <button className="flex items-center gap-1 bg-[#38235C] border border-[#4B556380] 
                      font-inter font-normal text-sm leading-none tracking-normal text-white px-3 py-2 rounded-lg ">
                    <span className="text-white">{icons?.settingsIcon}</span>
                    Units
                    <span className="text-white">{icons?.downArrowIcon}</span>
                </button>
            </div>

            {/* How's the sky looking today? */}
            <div className='flex flex-col items-center justify-center '>
                <p className='my-8 font-roboto font-light text-4xl '>How's the sky looking today?</p>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center w-full">

                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                                {icons?.searchIcon}
                            </div>

                            <input  {...register("place", { required: "Please enter a place" })} type="text" id="voice-search" className=" w-[641px] bg-[#1F293780] border border-[#4B5563B2] text-gray-900 text-sm rounded-lg focus:ring-[#38235C] focus:border-[#38235C] block  ps-10 p-2.5" placeholder="Search for a place..." />

                        </div>
                        <button type="submit" className="inline-flex items-center py-3 px-8 ms-10 font-inter font-medium text-base leading-none tracking-normal text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 ">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header