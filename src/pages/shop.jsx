import React from 'react'
import { PRODUCTS } from '../products'
import { Container, Row, Col } from 'react-bootstrap';
import { Product } from '../pages/product';

const shop = () => {

  return <Container> 
    <Row md={2} xs={1} lg={4} className='g-3'>
  {
      
      PRODUCTS.map(product => (
          <Col key={product.id}><Product data={product}  /></Col>
      ))
  }
</Row></Container>

}

export default shop