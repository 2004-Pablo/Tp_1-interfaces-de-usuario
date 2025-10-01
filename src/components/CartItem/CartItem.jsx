import React from "react";
import styles from "./CartItem.module.css";

export default function CartItem({ item, onDelete, onUpdate }) {
  return (
    <div className={styles.item}>
      <span>{item.nombre}</span>
      <span>${item.precio}</span>
      <input
        type="number"
        min="1"
        value={item.cantidad}
        onChange={(e) => onUpdate(item.id, e.target.value)}
      />
      <button onClick={() => onDelete(item.id)}>Eliminar</button>
    </div>
  );
}
