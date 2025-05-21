import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';


const SearchBox = ({setWeather,weather}) => {
  const [cityName,setCityName]=useState("");
  
   async function getWeather(){
   try{
    const url="https://api.weatherapi.com/v1/current.json";
    const apiKey="70d1f232ae0242bca9b70547250604";
    let res= await fetch(`${url}?key=${apiKey}&q=${cityName}`);
    let jres=await res.json();
     setWeather({...weather,text:jres.current.condition.text,img:jres.current.condition.icon,humidity:jres.current.humidity,temp:jres.current.feelslike_f});
     
    }
   catch
   {
    setWeather({...weather,text:"LOCATION NOT FOUND",img:"https://cdn.zeebiz.com/sites/default/files/2023/05/25/244075-delhi-weather-today-rain.jpg",humidity:"",temp:""});
   }


   }
    
    function change(e){
        setCityName(e.target.value);
      
    }
    async function handleSubmit(e){
        e.preventDefault();
        await getWeather();
        setCityName("");
        
      

    }
  return (
    <div className='SearchBox' >
        <form onSubmit={handleSubmit} >
        <TextField id="City Name" label="City Name" variant="outlined" required value={cityName} onChange={change} /> 
        <button style={{marginLeft:"10px" , marginTop:"5px"}}><ManageSearchIcon/></button>
        <br /><br />
        </form>
    </div>
  )
}

export default SearchBox