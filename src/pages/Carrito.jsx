import React from "react";
import CartItem from "../components/CartItem/CartItem";

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

  const total = carrito.reduce((acc, item) => { acc + (item.precio * item.cantidad) }, 0)

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tu Carrito</h2>
      {carrito.length === 0 ? (
        <p>No has agregado productos aún.</p>
      ) : (
        <>
          {carrito.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onDelete={eliminar}
              onUpdate={actualizarCantidad}
            />
          ))}
          <h3 className="text-xl font-semibold mt-4">Total: ${total}</h3>
          <button
            onClick={() => alert("Pedido confirmado ✅")}
            className="bg-green-600 text-white px-4 py-2 rounded mt-2"
          >
            Confirmar pedido
          </button>
        </>
      )}
    </div>
  );
}
