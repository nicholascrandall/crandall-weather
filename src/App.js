import './App.css';
import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Weather from './components/Weather'
import Search from './components/search'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipCode: ''
    }
  }

  setZipCode = (zip) => {
    this.setState({
      zipCode: zip
    })
  }

  render() {
    console.log(`GLOBAL ${this.state.zipCode}`)
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {/* weather show page */}
            <Route path="/weather">
              <NavBar />
              <Search setZipCode={this.setZipCode} />
              <Weather zipCode = {this.state.zipCode} />
            </Route>

            {/* HOME PAGE - KEEP AT BOTTOM */}
            <Route path="/">
              <NavBar />
              <Search setZipCode={this.setZipCode} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
