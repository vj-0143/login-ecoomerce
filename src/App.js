import React from 'react';
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Register} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/ecommerce' component={Home}/>
                </Switch>
            </div>
        </Router>
  );
}

export default App;
