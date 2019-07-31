import React from "react";

const weather = ({ temperature, city, country, humidity, description, error }) => {
    return(
        <div className="weather__info">
        { 
            city && country &&  <h3 className="weather__key"> Location:<span className="weather__value"> {city}, {country } </span></h3>
        }
        {
            temperature && <p className="weather__key">Temperature:  <span className="weather__value">{temperature} </span></p>
        }
        {
            humidity && <p className="weather__key">Humidity: <span className="weather__value">{humidity}</span> </p>
        }
        {
            description && <p className="weather__key"> Description: <span className="weather__value"> {description} </span></p>
        }
        {
            error && <p className="weather__key">  <span className="weather__value">{error} </span></p>
        }


        </div>
        )
}


export default weather;




