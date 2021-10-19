import { Component } from 'react'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Weather</h1>
                <p>Your Town</p>
            </div>
        )
    }

}