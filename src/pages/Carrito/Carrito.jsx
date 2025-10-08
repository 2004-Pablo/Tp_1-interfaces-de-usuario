import React from "react";
import CartItem from "../../components/CartItem/CartItem";

//Página que muestra el carrito
export default function Carrito({ carrito, setCarrito }) {
  const eliminar = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const actualizarCantidad = (id, cantidad) => {
    setCarrito(
      carrito.map((item) =>
        item.id === id ? { ...item, cantidad: Number(cantidad) } : item
      )
    );
  };

  const total = carrito.reduce((acc, item) =>  acc + (item.precio * item.cantidad) , 0)

  return (
    <div className="container py-4">
      <h2 className="h3 fw-bold mb-4">Tu Carrito</h2>
      {carrito.length === 0 ? (
        <div className="text-center py-5">
          <p className="fs-5 text-muted">No has agregado productos aún.</p>
          <p className="text-muted">¡Visita nuestra carta para agregar productos!</p>
        </div>
      ) : (
        <>
          <div className="mb-4">
            {carrito.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onDelete={eliminar}
                onUpdate={actualizarCantidad}
              />
            ))}
          </div>
          <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded">
            <h3 className="h4 mb-0">Total: ${total}</h3>
            <button
              onClick={() => alert("Pedido confirmado ✅")}
              className="btn btn-success btn-lg"
            >
              Confirmar pedido
            </button>
          </div>
        </>
      )}
    </div>
  );
}
