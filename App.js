import React,{useState,useEffect} from 'react';
import './App.css';
import {Header} from './components/Header';
import {WeatherCard} from './components/WeatherCard';
import { v4 as uuidv4 } from 'uuid';
import {Locations} from './components/Locations';

function App() {
  const REACT_APP_WEATHER_API_KEY = 'e5084e6a945bbc10ad45e47cf7ff49ff';
  const [attributeform,setAttributeform] = useState([])
  const [location,setLocation] = useState([{}])

  const onSubmit = async(title) =>{
    // const getWeather = async (title) => {
    //   const result = await fetchData(title,REACT_APP_WEATHER_API_KEY);
    //   return result;
    // }
    const weather = await fetchData(title,REACT_APP_WEATHER_API_KEY)
    // const weather = await getWeather(title)
    console.log(weather);
      const newLocation = {
        id : uuidv4(),  
        loc:title,
        weather: weather
      }
      console.log(newLocation);
      setLocation([...location,newLocation]);
    }
  

    
  
  useEffect(()=>{

    const getTemp = async() => {
      const taskFromServer = await fetchData('Karachi', REACT_APP_WEATHER_API_KEY);
      console.log(taskFromServer);
    }
    getTemp();
    
  },[])

  const fetchData = async(location,REACT_APP_WEATHER_API_KEY) => {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`);
    const data = await result.json();     
    return data;
  }
  
  return (
    <div>
      <Header title='My Weather Application'/>
      <button onClick = {() => setAttributeform([...attributeform,<WeatherCard key={Math.random()} submit={onSubmit}/>])}>
        +
      </button>
      {
        attributeform
      }
      <Locations locations={location}/>
    </div>
    
  ) 
}

export default App;
