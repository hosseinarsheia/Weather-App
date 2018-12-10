import React, { Component } from "react";
import Titles from "./Components/Title";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "52750c6bad0eaa7d12967d38fb33398a";

class App extends Component {
  state = {
    temepture: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();

    if(city && country){
      this.setState({
        temepture: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }else {
      this.setState({
        temepture: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "please enter the values",
      });
    }

   
  };
 

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temepture={this.state.temepture}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity} 
          description={this.state.description}
          error ={this.state.error}/>
      </div>
    );
  }
}

export default App;
