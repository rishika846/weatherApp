export default function InfoBox({weather}){
    
    return(
        <div>
        {weather.text?<p style={{color:"darkblue"}}><b >WEATHER:</b>{weather.text}</p>:null }
        <img  style={{height:"100px", width:"100px",border:"2px solid black", backgroundColor:"darkblue"}}
        src={weather.img} alt="your weather icon" />
        {weather.humidity?<p style={{color:"darkblue"}}><b  style={{color:"darkblue"}}>HUMIDITY:</b>{weather.humidity}</p>:null}
        {weather.temp?<p style={{color:"darkblue"}}><b  style={{color:"darkblue"}}>TEMPERATURE:</b>{weather.temp}&deg;C</p>:null}

        </div>
        
    )

}