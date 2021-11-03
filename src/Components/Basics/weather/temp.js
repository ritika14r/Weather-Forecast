import React, {useState} from 'react';
import WeatherCard from './weathercard';
import './weatherstyle.css';
import './weather-icons-master/weather-icons-master/css/weather-icons.css';

const Temp=()=>{
    const [searchValue,setSearchValue]=useState("");
    const [tempInfo,setTempInfo]=useState({})
    const getweatherinfo=async()=>{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=0747b19de33b48738eaa5d391a98e096`;
            const res=await fetch(url);
            const data= await res.json();
            console.log(data)
            const { temp , humidity , pressure}=data.main;
            const {main : weathermood}=data.weather[0];
            const {name}=data;
            const {speed}=data.wind;
            const {country,sunset}=data.sys;
            const myNewWeather={temp,humidity,pressure,weathermood,name,speed,country,sunset}
            setTempInfo(myNewWeather);
             
          
        }catch(error){
            console.log(error);
        }
    }
   
    React.useEffect=(()=>{
        getweatherinfo();
    },[]);
    
    return(
        <>
        
        <div className="main" >
        <div className="box">
        <div className="wrap">
            <div className="searchbox"></div>
            <input
            type="search"
            placeholder="Search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
            ></input>
            <button className="searchButton" type="button" onClick={getweatherinfo}> Search</button>
            
        </div>
       <WeatherCard tempInfo={tempInfo} />
        </div></div>
        </>
    )

}

export default Temp;