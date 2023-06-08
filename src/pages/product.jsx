import React from 'react'
import { Button, Card } from "react-bootstrap"
import { ShopContext } from '../context/shop-context';
import { useContext } from 'react';

export const Product = (props) => {
 
  const { id, productName, price, productImage} = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  console.log(cartItems);
  
  return <Card className="d-flex h-100">

        <Card.Img variant="top" src={productImage} height="200px" style={{objectFit: "contain"}} />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{productName}</span>
                <span className="ms-2 text-muted">${price}</span>
            </Card.Title>
            <Button className="w-100" onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}</Button>
        </Card.Body>
       </Card>
}
