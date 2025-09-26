import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { getHourlyForecast, getTimezone } from "../utils/dateAndTimes";
import Header from "./Header";

const API_KEY = "9d729cfd40c256defac28e6a8266b774";

type WeatherFormInputs = { place: string };

const WeatherInfo = () => {
    const { register, handleSubmit, reset } = useForm<WeatherFormInputs>();
    const [weatherData, setWeatherData] = useState<any>(null);
    const [localTime, setLocalTime] = useState("");

    const onSubmit = async (data: WeatherFormInputs) => {
        try {
            const [currentRes, forecastRes] = await Promise.all([
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data.place}&appid=${API_KEY}&units=metric`),
                axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${data.place}&appid=${API_KEY}&units=metric`),
            ]);

            if (currentRes.status === 200 && forecastRes.status === 200) {
                const data = { current: currentRes.data, forecast: forecastRes.data };
                setWeatherData(data);
            }
        } catch (error) {
            toast.error("City not found!");
        } finally {
            reset();
        }
    };

    useEffect(() => {
        if (weatherData?.current?.timezone !== undefined) {
            setLocalTime(getTimezone(weatherData.current.timezone));
        }
    }, [weatherData]);

    const hourly = getHourlyForecast(weatherData);

    // weekly placeholder (can later generate from API)
    const weeklyForecast = [
        { day: "Sat", icon: "☀️", temp_max: 25, temp_min: 18 },
        { day: "Sun", icon: "⛅", temp_max: 28, temp_min: 20 },
        { day: "Mon", icon: "☁️", temp_max: 22, temp_min: 16 },
        { day: "Tue", icon: "🌧️", temp_max: 24, temp_min: 17 },
        { day: "Wed", icon: "☀️", temp_max: 26, temp_min: 19 },
        { day: "Thu", icon: "🌬️", temp_max: 23, temp_min: 18 },
        { day: "Fri", icon: "⛈️", temp_max: 27, temp_min: 20 },
    ];

    return (
        <div className="min-h-screen [background-image:linear-gradient(to_bottom_right,#1e1a4f,#6a1b9a,#1e1a4f)] xl:py-[170px] xl:px-[260px]">
            {/* Search Form */}
            <Header register={register} handleSubmit={handleSubmit} reset={reset} onSubmit={onSubmit} />

            {!weatherData ? (
                <div className="text-white mt-10 text-center">No weather data. Search for a city above.</div>
            ) : (
                <div className="flex xs:flex-col lg:flex items-start justify-start gap-6 mt-8">
                    {/* Main Weather Info */}
                    <section className="w-full lg:w-[70%] px-4 lg:px-0">
                        <div className="bg-gradient-to-br from-[#2563EB] to-[#9333EA] w-full rounded-2xl px-8 pt-8 text-white">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="font-roboto font-semibold text-2xl">
                                        {weatherData.current.name}, {weatherData.current.sys.country}
                                    </p>
                                    <p className="font-roboto font-normal text-sm pt-0.5">{localTime}</p>
                                </div>
                                <span>📍</span>
                            </div>
                            <div className="mt-6 pb-8 flex items-start justify-between">
                                <span>☀️</span>
                                <p className="font-roboto font-light text-7xl">{weatherData.current.main.temp}°</p>
                            </div>
                        </div>

                        {/* Other metrics */}
                        <div className="mt-6 flex items-start gap-4">
                            <div className="bg-[#1F293780] w-[25%] rounded-xl ps-4 py-4 text-white">
                                <p className="text-[#9CA3AF] text-sm">Feel Like</p>
                                <p className="text-2xl">{weatherData.current.main.feels_like}°</p>
                            </div>
                            <div className="bg-[#1F293780] w-[25%] rounded-xl ps-4 py-4 text-white">
                                <p className="text-[#9CA3AF] text-sm">Humidity</p>
                                <p className="text-2xl">{weatherData.current.main.humidity}</p>
                            </div>
                            <div className="bg-[#1F293780] w-[25%] rounded-xl ps-4 py-4 text-white">
                                <p className="text-[#9CA3AF] text-sm">Wind</p>
                                <p className="text-2xl">{weatherData.current.wind.speed} m/s</p>
                            </div>
                            <div className="bg-[#1F293780] w-[25%] rounded-xl ps-4 py-4 text-white">
                                <p className="text-[#9CA3AF] text-sm">Precipitation</p>
                                <p className="text-2xl">{weatherData.current.rain?.["1h"] || 0} mm</p>
                            </div>
                        </div>

                        {/* Weekly forecast */}
                        <div className="mt-6">
                            <h3 className="font-bold text-lg text-white">Daily forecast</h3>
                            <div className="mt-4 flex gap-2">
                                {weeklyForecast.map((day, i) => (
                                    <div key={i} className="bg-[#1F293780] w-[14%] rounded-xl ps-4 py-4 flex flex-col items-center gap-5 text-white">
                                        <p className="text-[#9CA3AF] text-sm">{day.day}</p>
                                        <span>{day.icon}</span>
                                        <p>{day.temp_max}°</p>
                                        <p className="text-xs">{day.temp_min}°</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Hourly forecast */}
                    <section className="bg-[#1F293780] w-[90%] lg:w-[30%] mx-5 lg:mx-0 p-6 rounded-2xl text-white mt-8 lg:mt-0">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-lg">Hourly forecast</h3>
                            <button className="bg-[#374151] border border-[#4B5563] py-1.5 px-3 rounded-lg text-sm">Tuesday</button>
                        </div>

                        {hourly?.map((h:any, i:any) => (
                            <div key={i} className="flex items-start justify-between mt-4 border-b border-[#4B5563] py-3">
                                <div className="flex gap-5">
                                    <span>☁️</span>
                                    <p>{h.time}</p>
                                </div>
                                <p>{h.temp}</p>
                            </div>
                        ))}
                    </section>
                </div>
            )}
        </div>
    );
};

export default WeatherInfo;
