import { Route, Routes } from 'react-router'
import './App.css'
import WeatherInfo from './pages/WeaherInfo'
import Weather from './pages/Weather'
import { useState } from 'react';

function App() {

  const [weatherData, setWeatherData] = useState<{
    current: any;
    forecast: any;
  } | null>(null);
 

  return (
    <>
      {/* <WeatherInfo /> */}
      <Routes>
        <Route
          path="/"
          element={<Weather isResponse={false} setWeatherData={setWeatherData} />}
        />

        <Route
          path="/weather"
          element={<WeatherInfo />}
        />
      </Routes>
    </>
  )
}

export default App
