import React, { Component } from 'react'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='navBar'>
                <a href="/crandall-weather" className='navItem' ><h2>Weather</h2></a>
            </div>
        )
    }
}