import { useState } from "react";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";

import InfoBox from "./InfoBox";
export default function WeatherApp(){
    const [weather,setWeather]=useState({text:"",img:"https://cdn.zeebiz.com/sites/default/files/2023/05/25/244075-delhi-weather-today-rain.jpg",humidity:"",temp:""});


    return(
        <div className="WeatherApp">
            <SearchBox setWeather={setWeather} weather={weather}/>
            <InfoBox weather={weather}/>
        </div>
    )
}