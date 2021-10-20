import { Component } from 'react'

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apikey: process.env.REACT_APP_API_KEY,
            zipCode: this.props.zipCode,
        }
    }

    render() {
        console.log(`WEATHER PAGE: ${this.state.zipCode}`)
        // if (this.state.forecast) { }
        return (
            <div>
                <p>Temp: </p>
                <p>Wind: </p>
                <p>Description: </p>
            </div>

        )
    }
}