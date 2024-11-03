import { useState } from "react"
import axios from "axios"

const Weather = () => {

    const [enterCity, setenterCity] = useState("")
    //console.log(enterCity)

    const [weather, setWeather] = useState("")
    const [temperature, setTemperature] = useState("")
    const [decscription, setDecscription] = useState("")

    const handleCityChange = (e) => {
        setenterCity(e.target.value)
    }

    const getWeather = () => {
        //axios here use backticks`` and within the link use template literals 
        let weatherDetails = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enterCity}&appid=6c0fb810e6cd21359b556c4f01b95821`)

        weatherDetails.then(function (resolve) {
            //console.log(resolve)
            setWeather(resolve.data.weather[0].main)
            setTemperature(resolve.data.main.temp)
            setDecscription(resolve.data.weather[0].description)

        }).catch(function (reject) {
            // console.log(reject)
            setWeather("Request Failed")
            setTemperature("Request Failed")
            setDecscription("Request Failed")
        })
    }
    return (
        <>
            <div className="mt-10 text-center">
                <input onChange={handleCityChange} type="text" placeholder="Enter city name" className="border rounded-md border-black w-40 px-2 py-1 bg-transparent outline-none placeholder-slate-700"></input>
                <button onClick={getWeather} className="bg-black text-white px-2 py-1 ml-2 border rounded-md hover:bg-slate-800">Get Report</button>
                <div id="weather" className="mt-5 font-medium overflow-hidden">
                    <p>Weather: {weather}</p>
                    <p>Temperature: {temperature}</p>
                    <p>Description: {decscription}</p>
                </div>
            </div>
        </>


    )
}
export default Weather