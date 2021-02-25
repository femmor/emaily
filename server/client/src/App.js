import React, {Component} from "react"
import {BrowserRouter, Route} from 'react-router-dom'

// Components
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'

class App extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route path="/" exact component={Landing}/>
            <Route path="/surveys" exact component={Dashboard}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
