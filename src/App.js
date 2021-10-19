import './App.css';
import { Component } from 'react'
import NavBar from './components/NavBar'

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
        <h2>Centered</h2>
      </div>
    )
  }
}

export default App;
