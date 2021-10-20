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
      
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {/* weather show page */}
            <Route path="/weather">
              <NavBar />
              <Search />
              <Weather />
            </Route>

            {/* HOME PAGE - KEEP AT BOTTOM */}
            <Route path="/">
              <NavBar />
              <Search />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
