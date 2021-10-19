import { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
            <Menu
                fixed='top'
                inverted={true}
                className='nav-menu'
            >
                <Menu.Item name='Weather' className='item'>
                    <h2>Weather</h2>
                </Menu.Item>
            </Menu>
            </>
        )
    }
}