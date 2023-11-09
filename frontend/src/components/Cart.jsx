/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import classes from "./cart.module.css";
import { ROUTES } from "../utils/routes";

const Cart = ({ cartItems, emptyCart }) => {
  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });
  const navigate = useNavigate();
  const initiateOrder = () => {
    const isUserAuthenticated = window.localStorage.getItem("userData");
    if (!isUserAuthenticated) {
      navigate(ROUTES.Login);
    } else {
      navigate(ROUTES.NewOrder);
    }
  };
  return (
    <div className={`${classes["cart-container"]}`}>
      <div className={`${classes["close-btn"]}`}>
        <p>Fermer</p>
      </div>
      <div className={`${classes["cart-items-container"]}`}>
        <h3>Panier</h3>
        {cartItems.length !== 0 ? (
          <ul>
            {cartItems.map((item) => {
              return (
                <li
                  key={item.name}
                >{`${item.quantity} ${item.name} ${item.price} $`}</li>
              );
            })}
          </ul>
        ) : (
          <p>Votre panier est vide</p>
        )}
        <h4>Total: {totalPrice}$</h4>
        <div className={`${classes["action-btns-container"]}`}>
          <button
            onClick={initiateOrder}
            className={`${classes["confirm-btn"]}`}
          >
            Valider la commande
          </button>
          <button
            className={`${classes["empty-cart-btn"]}`}
            onClick={emptyCart}
          >
            Vider le panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
