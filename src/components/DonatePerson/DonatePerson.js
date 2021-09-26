import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./DonatePerson.css";

const DonatePerson = (props) => {
  const { name, gender, profession, amount, city, img } = props.person;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="col">
      <div className="card h-100 card-bg">
        <img src={img} className="card-img-top img-size" alt="..." />
        <div className="card-body">
          <h3 className="card-title text-center">{name}</h3>
          <div className="card-text ps-2 text-center">
            <p className="my-1">
              Gender: <span className="fw-bold">{gender}</span>
            </p>
            <p className="my-1">
              Profession: <span className="fw-bold">{profession}</span>
            </p>
            <p className="my-1">
              Current city: <span className="fw-bold">{city}</span>
            </p>
            <p className="my-1">
              Donate Amount: <span className="fw-bold">${amount}</span>
            </p>
          </div>
        </div>
        <div className="mb-2 text-center">
          <button
            onClick={() => props.handleAddToCart(props.person)}
            className="btn btn-info px-5"
          >
            {cartIcon} Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonatePerson;
