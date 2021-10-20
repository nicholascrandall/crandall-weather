import './App.css';
import { Component } from 'react'
import NavBar from './components/NavBar'
import Weather from './components/Weather'
import Search from './components/search'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <Search />
        <Weather />
      </div>
    )
  }
}

export default App;
