import React from 'react'
import { Navbar, Nav, Container} from "react-bootstrap";
import {Link} from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

export const AppNavbar = () => {
  return (
    <Navbar className="bg-white shadow-sm mb-3" sticky="top">

      <Container className="me-3">
      <Nav class="d-flex justify-content-around w-100" style={{ textDecoration: 'none' }}> 
            <Link to="/" style={{ textDecoration: 'none', color:'black' }}>Home</Link>
            <Link to="/shop" style={{ textDecoration: 'none', color:'black' }}>Store</Link>
            <Link to="/cart" style={{ textDecoration: 'none', color:'black' }}>Cart <FiShoppingCart /> </Link>
      </Nav>
      </Container>
    </Navbar>
  )
}
