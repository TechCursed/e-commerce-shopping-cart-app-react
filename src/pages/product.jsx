import React from 'react'
import { Button, Card } from "react-bootstrap"

export const Product = (props) => {
 
  const {id, productName, price, productImage} = props.data;
  return <Card className="d-flex h-100">

        <Card.Img variant="top" src={productImage} height="200px" style={{objectFit: "contain"}} />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{productName}</span>
                <span className="ms-2 text-muted">${price}</span>
            </Card.Title>
            <Button className="w-100">Add To Cart</Button>
        </Card.Body>
       </Card>
}
