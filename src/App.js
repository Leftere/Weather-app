import React, { Component} from 'react';
import logo from './logo.svg';

import Titles from "./components/Titiles";
import Form from './components/Form';
import Weather from './components/Weather'

const API_KEY = "89507e2493037008684adbeadb131c19";


class App extends Component {
  state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: ''
  }
componentDidMount(){
  
}
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    // const cut = e.target.elements.name
    
   
    if(city && country ) {
      console.log(data)
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter Value'
      })
    }
   
  }
  render() {
    const { temperature, city, country, humidity, description, error } = this.state;
    return(
      <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-xs-5 title-container">
            <Titles />
            </div>
            <div className="col-xs-7 form-container"> 
            <Form getWeather={this.getWeather}/>
<Weather temperature={temperature}
          city={city}
          country={country}
          humidity={humidity}
          description={description}
          error={error}
/>
            </div>
          </div>
        </div>
      </div>

      </div>
    ) 
  }
}




export default App;
