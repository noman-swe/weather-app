
import { useForm } from 'react-hook-form';
import { icons } from '../../public/icons/icons'
import type { WeatherFormInputs } from '../types/types';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';
// import Header from './Header';



const Weather = () => {
    const { register, handleSubmit, reset } = useForm<WeatherFormInputs>();
    const navigate = useNavigate();

    const API_KEY = "9d729cfd40c256defac28e6a8266b774"; 

   

    const onSubmit = async (data: WeatherFormInputs) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${data.place}&appid=${API_KEY}&units=metric`;

            const response = await axios.get(url);

            // if response ok
            if (response.status === 200) {
                navigate("/weather", { state: { weather: response.data } });
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        catch (error) {
            toast.error("city not found or network error!");
        }
        finally {
            reset();
        }
    };


return (
    <div>
        <div className="min-h-screen [background-image:linear-gradient(to_bottom_right,#1e1a4f,#6a1b9a,#1e1a4f)] flex items-start justify-start xl:py-[300px] xl:px-[260px]">
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
            {/* <Header register={register} handleSubmit={handleSubmit} reset={reset} onSubmit={onSubmit}  /> */}
        </div>

        <ToastContainer position="top-center" />
    </div>
)
}

export default Weather