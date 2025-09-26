
import { useForm } from 'react-hook-form';
import type { WeatherFormInputs, WeatherProps } from '../types/types';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';
import NoWeatherInfo from './NoWeatherInfo';
import Header from './Header';


const Weather = ({ isResponse, setWeatherData }: WeatherProps) => {
    const { register, handleSubmit, reset } = useForm<WeatherFormInputs>();
    const navigate = useNavigate();

    const API_KEY = "9d729cfd40c256defac28e6a8266b774";

    const onSubmit = async (data: WeatherFormInputs) => {
        try {
            // weather & 5-day forecast in parallel fetch
            const [currentRes, forecastRes] = await Promise.all([
                axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${data.place}&appid=${API_KEY}&units=metric`
                ),
                axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${data.place}&appid=${API_KEY}&units=metric`
                ),
            ]);
            // if both requests are successful, navigate to /weather with state
            if (currentRes.status === 200 && forecastRes.status === 200) {
                setWeatherData({
                    current: currentRes.data,
                    forecast: forecastRes.data,
                });
                navigate('/weather');
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars 
        catch (error) {
            // handle errors 
            toast.error("City not found!");
        } finally {
            reset();
        }
    };


    return (
        <div className='relative'>
            <div className="min-h-screen [background-image:linear-gradient(to_bottom_right,#1e1a4f,#6a1b9a,#1e1a4f)] flex items-start justify-start xl:py-[300px] xl:px-[260px]">

                <Header register={register} handleSubmit={handleSubmit} reset={reset} onSubmit={onSubmit} />
            </div>
            {!isResponse &&
                <div className='absolute top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <NoWeatherInfo />
                </div>
            }

            <ToastContainer position="top-center" />
        </div>
    )
}

export default Weather