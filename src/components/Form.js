import React, { Component} from "react";


const Form = ({getWeather}) => {
    return(
        <form onSubmit={getWeather}>
        <input type="text" name="city" placeholder="city..." />
        <input type="text" name="country" placeholder="Country..." />
        <button >Get Weather</button>
    </form>
    )
}


export default Form;




