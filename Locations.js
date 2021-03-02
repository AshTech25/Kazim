import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Locations = ({locations}) => {
    // const getWeather = (locations) => {
    //     locations.map(location=>console.log(location.weather))};

    // getWeather(locations);
    return (
        <div>
           <h2>{locations}</h2> 
        </div>
    )
}
