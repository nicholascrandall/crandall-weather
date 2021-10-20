import { Component } from 'react'

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
        this.setState({
            zipSearched: true
        })
    }

    render() {
        console.log(this.state);
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