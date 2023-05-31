import React from 'react'
import { Navbar, Nav, Container} from "react-bootstrap";
import {Link} from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';


export const AppNavbar = () => {
  return (
    <Navbar className="bg-white shadow-sm mb-3" sticky="top">

      <Container className="me-3">
      <Nav class="d-flex justify-content-around w-100"> 
            <Link to="/">Home</Link>
            <Link to="/about">Store</Link>
            <Link to="/store">Cart <FiShoppingCart /> </Link>
      </Nav>
      </Container>
    </Navbar>
  )
}
