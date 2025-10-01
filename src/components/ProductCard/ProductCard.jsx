import React from "react";
import styles from "./ProductCard.module.css";

//producto y onAdd son props que vienen de Carta
export default function ProductCard({ producto, onAdd }) {
  return (
    <div className="card shadow-sm h-100" style={{ width: "18rem" }}>
      <img
        src={producto.img}
        alt={producto.nombre}
        className="card-img-top"
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text text-muted">${producto.precio}</p>
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
