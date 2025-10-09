import React, { useState, useEffect } from "react";
import styles from "./ProductCard.module.css";

// producto y onAdd son props que vienen de Carta
// producto: objeto con datos de cada producto
// onAdd: función que maneja el evento de "agregar al carrito"
export default function ProductCard({ producto, onAdd }) {
  const [agregado, setAgregado] = useState(false);

  const handleAgregar = () => {
    onAdd(producto);
    setAgregado(true);
  };

  // useEffect para resetear el estado del botón después de 1 segundo
  useEffect(() => {
    if (agregado) {
      const timer = setTimeout(() => {
        setAgregado(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [agregado]);

  return (
    <div className="card shadow-sm h-100">
      <img
        src={producto.img}
        alt={producto.nombre}
        className={`card-img-top ${styles.imagenProducto}`}
      />
       <div className={`card-body d-flex flex-column ${styles.miEstiloTarjeta}`}>
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">${producto.precio}</p>
        <button
          className={`btn mt-auto ${agregado ? 'btn-success' : 'btn-primary'}`}
          onClick={handleAgregar}
          disabled={agregado}
        >
          {agregado ? "Producto agregado" : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
}
