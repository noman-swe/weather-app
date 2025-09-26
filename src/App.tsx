import { Route, Routes } from 'react-router'
import './App.css'
import WeatherInfo from './pages/WeaherInfo'
import Weather from './pages/Weather'

function App() {

  return (
    <>
      {/* <WeatherInfo /> */}
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/weather" element={<WeatherInfo />} />
      </Routes>
    </>
  )
}

export default App
