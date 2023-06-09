import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { PRODUCTS } from "../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { Row, Button } from "react-bootstrap";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart" >
      <div>
        <h1 style={{margin:"1rem"}}>Your Cart Items</h1>
      </div>
      <div className="cart">
      <Row md={2} xs={1} lg={4} className='g-3'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
          return <></>
        })}
        </Row>
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <h2 style={{margin:"1rem"}}> Subtotal: ${totalAmount} </h2>
          <Button variant="primary" onClick={() => navigate("/")}> Continue Shopping </Button>
          <Button variant="dark" style={{margin:".5rem"}}
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </Button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;