import React from "react";
import styles from "./CartItem.module.css";

/* Componente que representa un item dentro del carrito.
Props:
- Item(objeto del producto con sus atributos)
- onDelete (funcion para eliminar el producto del carrito)
- onUpdate: función que actualiza la cantidad del producto */
export default function CartItem({ item, onDelete, onUpdate }) {
  return (
    <div className={styles.item}>
      <div className={styles.productInfo}>
        <img 
          src={item.img} 
          alt={item.nombre} 
          className={styles.productImage}
        />
        <span className={styles.productName}>{item.nombre}</span>
      </div>
      <span className={styles.price}>${item.precio}</span>
      <input
        type="number"
        min="1"
        value={item.cantidad}
        onChange={(e) => onUpdate(item.id, e.target.value)}
        className={styles.quantityInput}
      />
      <span className={styles.subtotal}>${item.precio * item.cantidad}</span>
      <button onClick={() => onDelete(item.id)} className={styles.deleteButton}>
        Eliminar
      </button>
    </div>
  );
}
