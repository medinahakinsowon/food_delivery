import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeCartItem } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((food, index) => {
          if (cartItems[food._id] > 0) {
            return (
              <div>
                <div key={index} className="cart-items-title cart-items-item">
                  <img src={food.image} alt="" />
                  <p>{food.name}</p>
                  <p>N{food.price}</p>
                  <p>{cartItems[food._id]}</p>
                  <p>N{food.price * cartItems[food._id]}</p>
                  <p onClick={() => removeCartItem(food._id)} className="remove_from_cart">x</p>
                </div>
                <hr/>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details"></div>
            <div className="cart-total-details"></div>
            <div className="cart-total-details"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
