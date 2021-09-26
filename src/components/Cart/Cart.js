import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Cart.css";
import Selected from "./Selected";
const Cart = (props) => {
  //fontAwesome icon
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  const { cart } = props;

  let total = 0;
  for (const person of cart) {
    total = total + person.amount;
  }

  return (
    <div className="text-center cart">
      <h2>Selected Person </h2>
      <h5>
        Person Added: <span className="fw-bold"> {props.cart.length}</span>
      </h5>
      <h6>
        Total Amount: <span className="fw-bold"> $ {total}</span>
      </h6>
      <div className="my-4">
        {cart.map((personName) => (
          <Selected key={personName._id} personName={personName}></Selected>
        ))}
      </div>
      <button className="btn btn-info px-5">{cartIcon} Buy Now</button>
    </div>
  );
};

export default Cart;
