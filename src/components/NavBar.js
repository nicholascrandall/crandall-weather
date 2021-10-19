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
                <Menu.Item name='Home' className='item'>
                    Home
                </Menu.Item>
            </Menu>
            </>
        )
    }
}