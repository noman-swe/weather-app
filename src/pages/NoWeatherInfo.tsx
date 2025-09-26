import React from 'react'
import { icons } from '../../public/icons/icons'

const NoWeatherInfo = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mb-4">{icons?.noWeatherInfoIcon}</div>
            <p className="font-roboto font-semibold text-2xl leading-none tracking-normal text-white">
                Search for a city to see weather information
            </p>
        </div>
    )
}

export default NoWeatherInfo