import { Component } from 'react'

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
        console.log(weatherURL);
        fetch(weatherURL)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    forecast: data
                })
                console.log(data)
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
        console.log("calling weather")
    }

    render() {
        console.log(`WEATHER PAGE ZIP: ${this.state.zipCode}`)
        if (this.state.forecast) {
            return (
                <div>
                    <p>Temp: </p>
                    <p>Wind: </p>
                    <p>Description: </p>
                </div>
            )
        } else {
            console.log(this.state.error)
            return (
                <div>
                    <p>Temp: </p>
                    <p>Wind: </p>
                    <p>Description: </p>
                    <p>loading...</p>
                </div>
            )
        }
    }
}