import React, {  useEffect, useState } from "react"
import '../css/weather.css'
export const Weather = function () {
    const [city, setCity] = useState("hanoi")
    const [apiResult, setApiResult] = useState({})
    const [tempC, setTempC] = useState("");
    const [tempF, setTempF] = useState("")

    useEffect(() => {
        const url = `https://openweathermap.org/data/2.5/weather?q=${city}&appid=439d4b804bc8187953eb36d2a8c26a02`
        fetch(url)
            .then(resp => resp.json())
            .then(resp => {
                setApiResult(resp);
            })
    }, [city])

    const cToF = (tempC) => {
        return tempC * 9 / 5 + 32
    }

    useEffect(() => {
        if (apiResult.main !== undefined) {
            setTempC(apiResult.main.temp)
            setTempF(Math.floor(cToF(apiResult.main.temp) * 100) / 100)
        }
    }, [apiResult])


    useEffect(() => {
        console.log(apiResult);
        console.log(tempC);
        console.log(tempF)
    }, [tempC])





    return <div className="container">
        <div className="header">
            <h3>Weather</h3>
            <div className="main-content">
                <h1 className="city">{city}</h1>
                <div className="tem">
                    {/* {apiResult.main.temp} */}
                    <div className="tem-C">{tempC} độ C</div>
                    <div className="tem-F">{tempF} độ F</div>
                </div>
            </div>
        </div>
        <div className="main-search">
            <h4>Search</h4>
            <input id="cityInput" type="text" className="search-input" placeholder="City name" onChange={() => setCity(document.getElementById("cityInput").value)} />
        </div>
        <div className="main-footer">
            <div className="city-item">Current Location <i className="bi bi-geo-alt"></i></div>
            <div className="city-item">Hồ Chí Minh</div>
            <div className="city-item">Cần Thơ</div>
            <div className="city-item">Long An</div>
        </div>
    </div>

}