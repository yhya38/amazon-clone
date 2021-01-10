import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [, dispatch] = useStateValue();
  const RemoveFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="checkoutimage" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <strong>&#8377; {price}</strong>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <span aria-label="star" role="img">
                  🌟
                </span>
              </p>
            ))}
        </div>
        <button onClick={RemoveFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
