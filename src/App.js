import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
            <div>
                <Routes>
                    <Route exact path='/' element={<Register/>} />
                    <Route exact path='/login' element={<Login/>} />
                    <Route exact path='/ecommerce' element={<Home/>}/>
                </Routes>
            </div>
        </Router>
  );
}

export default App;
