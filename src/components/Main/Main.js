import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import DonatePerson from "../DonatePerson/DonatePerson";
import "./Main.css";

const Main = () => {
  const [persons, setPersons] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./persons.JSON")
      .then((res) => res.json())
      .then((data) => setPersons(data));
  }, []);
  const handleAddToCart = (person) => {
    const newCart = [...cart, person];
    setCart(newCart);
  };
  return (
    <div className="">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-9">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {persons.map((person) => (
                <DonatePerson
                  person={person}
                  key={person._id}
                  handleAddToCart={handleAddToCart}
                ></DonatePerson>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
