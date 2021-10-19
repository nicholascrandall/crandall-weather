import { Component } from 'react'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='navBar'>
                <h2 className='navItem'>Weather</h2>
            </div>
        )
    }
}