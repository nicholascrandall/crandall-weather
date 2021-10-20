import { Component } from 'react'

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apikey: process.env.REACT_APP_API_KEY,
            zipCode: this.props.zipCode,
        }
    }

    getWeather = () => {
        const weatherURL = `api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode}&appid=${this.state.apikey}&units=imperial`
        fetch(weatherURL)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    forecast: data
                })
            })
    }

    componentDidMount() {
        this.getWeather()
    }

    render() {
        console.log(`WEATHER PAGE: ${this.state.zipCode}`)
        if (this.state.forecast) {
            return (
                <div>
                    <p>Temp: </p>
                    <p>Wind: </p>
                    <p>Description: </p>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Weather Details Not Found</h3>
                </div>
            )
        }
    }
}