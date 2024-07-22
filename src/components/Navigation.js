import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cards from './Card';

export default function Navigation() {
  return (
    <>
    
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" className='ecommerce'>Ecommerce</Navbar.Brand>
        <Nav className="mx-60 fs-5 fw-bold ">
          <Nav.Link href="#home" >Home</Nav.Link>
          <Nav.Link href="#features" >Product</Nav.Link>
          <Nav.Link href="#pricing">Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
<Cards/>
   
  </>
  )
}
