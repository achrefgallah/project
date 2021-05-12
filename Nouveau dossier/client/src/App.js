import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './component/Admin';
import Home from './component/Home';
import Footer from './component/Footer';
import Hotel from './component/Hotel';
import Login from './component/Login';
import NavBar from './component/NavBar';


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/:id' component={Hotel}/>
            <Route path='/Login' component={Login}/>
            <Route path='/Admin' component={Admin}/>
          </Switch>
        </div>
      </Router>
    )

  }
}

export default App;