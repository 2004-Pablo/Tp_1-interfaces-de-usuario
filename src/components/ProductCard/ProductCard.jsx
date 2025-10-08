import React from "react";
import styles from "./ProductCard.module.css";

// producto y onAdd son props que vienen de Carta
// producto: objeto con datos de cada producto
// onAdd: función que maneja el evento de "agregar al carrito"
export default function ProductCard({ producto, onAdd }) {
  return (
    <div /*id="tarjeta"*/ className="card shadow-sm h-100">
      <img
        src={producto.img}
        alt={producto.nombre}
        className={`card-img-top ${styles.imagenProducto}`}
      />
       <div className={`card-body d-flex flex-column ${styles.miEstiloTarjeta}`}>
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">${producto.precio}</p>
        <button
          className="btn btn-primary mt-auto"
          onClick={() => onAdd(producto)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
