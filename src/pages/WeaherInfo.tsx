// import { icons } from '../../public/icons/icons'

const WeatherInfo = () => {
    return (
        <div>
            <div className="min-h-screen [background-image:linear-gradient(to_bottom_right,#1e1a4f,#6a1b9a,#1e1a4f)] flex items-start justify-start gap-6 xl:py-[300px] xl:px-[260px]">
                <section className='w-[70%]'>
                    <div className='bg-gradient-to-br from-[#2563EB] to-[#9333EA]  w-full rounded-2xl'>
                        <div className='px-8 pt-8 flex items-start justify-between text-white'>
                            <div>
                                <p className='font-roboto font-semibold text-2xl'>Berlin, Germany</p>
                                <p className='font-roboto font-normal text-sm pt-0.5'>Tuesday, Aug 5, 2025</p>
                            </div>
                            <span>
                                📍
                            </span>
                        </div>

                        <div className=' px-8 mt-6 pb-8 flex items-start justify-between'>
                            <span> ☀️</span>
                            <p className="font-roboto font-light text-7xl leading-none tracking-normal text-white">
                                20°
                            </p>
                        </div>
                    </div>

                    {/*  */}
                    <div className='mt-6 flex items-start gap-4'>
                        <div className='bg-[#1F293780] font-roboto w-[25%] rounded-xl ps-4 py-4 '>
                            <p className=' text-[#9CA3AF] text-sm font-normal'>Feel Like</p>
                            <p className=' text-white font-roboto font-normal text-2xl '>18°</p>
                        </div>
                        <div className='bg-[#1F293780] font-roboto w-[25%] rounded-xl ps-4 py-4 '>
                            <p className=' text-[#9CA3AF] text-sm font-normal'>Feel Like</p>
                            <p className=' text-white font-roboto font-normal text-2xl '>18°</p>
                        </div>
                        <div className='bg-[#1F293780] font-roboto w-[25%] rounded-xl ps-4 py-4 '>
                            <p className=' text-[#9CA3AF] text-sm font-normal'>Feel Like</p>
                            <p className=' text-white font-roboto font-normal text-2xl '>18°</p>
                        </div>
                        <div className='bg-[#1F293780] font-roboto w-[25%] rounded-xl ps-4 py-4 '>
                            <p className=' text-[#9CA3AF] text-sm font-normal'>Feel Like</p>
                            <p className=' text-white font-roboto font-normal text-2xl '>18°</p>
                        </div>
                    </div>

                    <div className='mt-6'>
                        <h3 className="font-roboto font-bold text-lg text-white leading-none tracking-normal">Daily forecast</h3>
                        <div className='mt-4 flex gap-2'>
                            <div className='bg-[#1F293780] font-roboto w-[14%] rounded-xl ps-4 py-4 flex flex-col items-center justify-center gap-5'>
                                <div className='flex flex-col gap-3 '>
                                    <p className=' text-[#9CA3AF] text-sm font-normal'>Tue</p>
                                    <span>☁️</span>
                                </div>
                                <div className='flex flex-col font-roboto'>
                                    <p className=' text-white font-normal text-sm '>20°</p>
                                    <p className=' text-white font-light text-xs '>14°</p>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className='bg-[#1F293780] font-roboto w-[14%] rounded-xl ps-4 py-4 flex flex-col items-center justify-center gap-5'>
                                <div className='flex flex-col gap-3 '>
                                    <p className=' text-[#9CA3AF] text-sm font-normal'>Tue</p>
                                    <span>☁️</span>
                                </div>
                                <div className='flex flex-col font-roboto'>
                                    <p className=' text-white font-normal text-sm '>20°</p>
                                    <p className=' text-white font-light text-xs '>14°</p>
                                </div>
                            </div>
                            {/* 3 */}
                            <div className='bg-[#1F293780] font-roboto w-[14%] rounded-xl ps-4 py-4 flex flex-col items-center justify-center gap-5'>
                                <div className='flex flex-col gap-3 '>
                                    <p className=' text-[#9CA3AF] text-sm font-normal'>Tue</p>
                                    <span>☁️</span>
                                </div>
                                <div className='flex flex-col font-roboto'>
                                    <p className=' text-white font-normal text-sm '>20°</p>
                                    <p className=' text-white font-light text-xs '>14°</p>
                                </div>
                            </div>
                            {/* 4*/}
                            <div className='bg-[#1F293780] font-roboto w-[14%] rounded-xl ps-4 py-4 flex flex-col items-center justify-center gap-5'>
                                <div className='flex flex-col gap-3 '>
                                    <p className=' text-[#9CA3AF] text-sm font-normal'>Tue</p>
                                    <span>☁️</span>
                                </div>
                                <div className='flex flex-col font-roboto'>
                                    <p className=' text-white font-normal text-sm '>20°</p>
                                    <p className=' text-white font-light text-xs '>14°</p>
                                </div>
                            </div>
                            {/* 5 */}
                            <div className='bg-[#1F293780] font-roboto w-[14%] rounded-xl ps-4 py-4 flex flex-col items-center justify-center gap-5'>
                                <div className='flex flex-col gap-3 '>
                                    <p className=' text-[#9CA3AF] text-sm font-normal'>Tue</p>
                                    <span>☁️</span>
                                </div>
                                <div className='flex flex-col font-roboto'>
                                    <p className=' text-white font-normal text-sm '>20°</p>
                                    <p className=' text-white font-light text-xs '>14°</p>
                                </div>
                            </div>
                            {/* 6 */}
                            <div className='bg-[#1F293780] font-roboto w-[14%] rounded-xl ps-4 py-4 flex flex-col items-center justify-center gap-5'>
                                <div className='flex flex-col gap-3 '>
                                    <p className=' text-[#9CA3AF] text-sm font-normal'>Tue</p>
                                    <span>☁️</span>
                                </div>
                                <div className='flex flex-col font-roboto'>
                                    <p className=' text-white font-normal text-sm '>20°</p>
                                    <p className=' text-white font-light text-xs '>14°</p>
                                </div>
                            </div>
                            {/* 7 */}
                            <div className='bg-[#1F293780] font-roboto w-[14%] rounded-xl ps-4 py-4 flex flex-col items-center justify-center gap-5'>
                                <div className='flex flex-col gap-3 '>
                                    <p className=' text-[#9CA3AF] text-sm font-normal'>Tue</p>
                                    <span>☁️</span>
                                </div>
                                <div className='flex flex-col font-roboto'>
                                    <p className=' text-white font-normal text-sm '>20°</p>
                                    <p className=' text-white font-light text-xs '>14°</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className='bg-[#1F293780] w-[30%] p-6 rounded-2xl '>
                    <div className='flex justify-between '>
                        <h3 className="font-roboto font-bold text-lg text-white leading-none tracking-normal">Hourly forecast</h3>
                        <button className='bg-[#374151] border border-[#4B5563] py-1.5 px-3  text-white font-inter font-normal text-sm rounded-lg'>
                            Tuesday
                        </button>
                    </div>

                    <div className='flex items-start justify-between text-white mt-4 border-b border-[#4B5563] py-3'>
                        <div className='flex gap-5'>

                            <span>☁️</span>
                            <p className='font-roboto font-normal text-lg'>3 PM</p>
                        </div>
                        <p className='font-roboto font-normal text-lg'>20°</p>
                    </div>
                    {/* 2 */}
                    <div className='flex items-start justify-between text-white mt-4 border-b border-[#4B5563] py-3'>
                        <div className='flex gap-5'>

                            <span>☁️</span>
                            <p className='font-roboto font-normal text-lg'>3 PM</p>
                        </div>
                        <p className='font-roboto font-normal text-lg'>20°</p>
                    </div>
                    {/* 3 */}
                    <div className='flex items-start justify-between text-white mt-4 border-b border-[#4B5563] py-3'>
                        <div className='flex gap-5'>

                            <span>☁️</span>
                            <p className='font-roboto font-normal text-lg'>3 PM</p>
                        </div>
                        <p className='font-roboto font-normal text-lg'>20°</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default WeatherInfo