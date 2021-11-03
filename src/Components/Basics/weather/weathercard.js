import React, { useState } from "react";
import './weatherstyle.css'
import './weather-icons-master/weather-icons-master/css/weather-icons.css';
const WeatherCard=({tempInfo})=>{
    /*const [weatherState,setWeatherState]=useState("");*/
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset 
        }=tempInfo;
   
    /*const X = (weathermood) => {
    React.useEffect(()=>{
        if(weathermood){
            switch(weathermood){
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherState("wi-fog");
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                case "Smoke":
                    setWeatherState("wi-day-smoke");
                    break;
                case "Mist":
                    setWeatherState("wi-dust");
                    break;
                default:setWeatherState("wi-day-sunny");break;
            }
         }

        },[weathermood]);
}*/
var Climate;
switch(weathermood){
    case "Clouds":
        Climate="wi wi-day-cloudy";
        break;
    case "Haze":
        Climate="wi wi-fog";
        break;
    case "Clear":
        Climate="wi wi-day-sunny";
        break;
    case "Smoke":
        Climate="wi wi-smoke";
        break;
    case "Mist":
        Climate="wi wi-dust";
        break;
    default:Climate="wi wi-day-sunny";break;
}
    


    let sec=sunset;
    let date=new Date(sec*1000);
    let timeStr=`${date.getHours()}:${date.getMinutes()}`;

    return(
        <>
        <article className="widget">
            
            <div className="weatherIcon">
                <i className={Climate}></i>
            
            <div className="weatherInfo">
                <div className="temperature">
                    <span>{temp}&deg;</span>
                </div>
                <div className="description">
                    <div className="weatherCondition">{weathermood}</div>
                    <div className="place">{name} {country}</div>
                </div>
            </div></div>
            <div className="date">{new Date().toLocaleString()}</div>
            
            <div className="extra-temp">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p>
                            <i className="wi wi-sunset"></i>
                        </p >
                        <p className="extra-info-leftside">
                            {timeStr} PM<br/>Sunset
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p>
                            <i className="wi wi-humidity"></i>
                        </p >
                        <p className="extra-info-leftside">
                             {humidity}%<br/> Humidity
                        </p>
                    </div>
                
                    
                        <div className="two-sided-section">
                        <p>
                            <i className="wi wi-rain"></i>
                        </p >
                        <p className="extra-info-leftside">
                          {pressure} mb <br/>Pressure
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p>
                            <i className="wi wi-strong-wind"></i>
                        </p >
                        <p className="extra-info-leftside">
                            {speed}km/h<br/>speed
                        </p>
                    </div>
                        </div>
                            
                            
            </div>
        </article>
        </>
    )
}
export default WeatherCard;