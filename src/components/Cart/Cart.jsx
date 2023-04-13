import React from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className={styles.container}>
        <h1>Su carrito esta vacio</h1>
        <Link to="/" className={styles.buttonComprar}>
          Conprar
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.containerCompra}>
      {cart.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      <div className={styles.ContainerFinalCart}>
        <p className={styles.totalCart}>Total $ {totalPrice()}</p>
        <button className={styles.buttonFinalCompra}>Finalizar Compra</button>
      </div>
    </div>
  );
};

export default Cart