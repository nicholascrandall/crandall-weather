import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zipCode: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            zipCode: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.setZipCode(this.state.zipCode)
        this.setState({
            zipSearched: true
        })
    }

    render() {
        if (this.state.zipSearched) {
            return <Redirect to="/weather" />
        }
        return (
        <div className="searchContainer">
            <form onSubmit={this.handleSubmit}>
                <input
                type="number"
                className="searchInput"
                value={this.state.zipCode}
                placeholder="Enter your Zip Code (USA Only)"
                onChange={this.handleChange}
                />
            </form>
        </div>
        )
    }
}