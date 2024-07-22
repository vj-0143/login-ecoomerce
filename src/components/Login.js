import React, { useState } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
//import Home from './Home';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    const onSubmit = async (e) => {
        e.preventDefault();

        const user = { username, password };

        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', user);
            console.log(res.data);
            history.push('/ecommerce');

            alert("login succefullty")
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div className='box1'>
        <Form onSubmit={onSubmit}>
            <h1>Login Page</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  value={username}
                onChange={(e) => setUsername(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  value={password}
                onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    );
};

export default Login;
