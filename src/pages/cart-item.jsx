import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { Card } from "react-bootstrap";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (


<Card className="d-flex h-100">

<Card.Img variant="top" src={productImage} height="200px" style={{objectFit: "contain"}} />
<Card.Body className="d-flex flex-column">
    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <span className="fs-2">{productName}</span>
        <span className="ms-2 text-muted">${price}</span>
    </Card.Title>
    <div className="countHandler">
           <button style={{width:"1.5rem"}} onClick={() => removeFromCart(id)}> - </button>
           <input style={{width:"3rem", margin:".5rem"}}
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id) }
          />
          <button style={{width:"1.5rem"}} onClick={() => addToCart(id)}> + </button>
        </div>
</Card.Body>
</Card>


  );
};