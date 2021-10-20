import { Component } from 'react'
import forecast from '../images/forecast.png'
import humidity from '../images/humidity.png'
import temperature from '../images/thermometer.png'
import wind from '../images/wind.png'

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apikey: process.env.REACT_APP_API_KEY,
            zipCode: this.props.zipCode,
            error: null
        }
    }

    getWeather = () => {
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode}&appid=${this.state.apikey}&units=imperial`
        fetch(weatherURL)
            .then(response => response.json())
            .then((data) => {
                if (data.main) {
                    this.setState({
                        forecast: data
                    })
                }
            },
            (error) => {
                this.setState({
                    error
                })
            }
        )
    }

    componentDidMount() {
        this.getWeather()
    }

    render() {
        if (this.state.forecast) {
            return (
                <div className="forecast">
                    <img src={forecast} alt="forecast" />
                    <h1>Forecast for {this.state.forecast.name}</h1>
                    <img src={temperature} alt="temperature" />
                    <h3>Temp: {this.state.forecast.main.temp}° F</h3>
                    <img src={wind} alt="wind" />
                    <h3>Wind: {this.state.forecast.wind.speed} MPH</h3>
                    <img src={humidity} alt="humidity" />
                    <h3>Humidity: {this.state.forecast.main.humidity}%</h3>
                    <h3>{this.state.forecast.weather[0].description}</h3>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Temp: </h3>
                    <h3>Wind: </h3>
                    <h3>Description: </h3>
                    <h3>loading...</h3>
                </div>
            )
        }
    }
}