import React from "react";

//Componente que renderiza el Carrito
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

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tu Carrito</h2>
      {carrito.length === 0 ? (
        <p>No has agregado productos aún.</p>
      ) : (
        <div className="space-y-4">
          {carrito.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-2">
              <span>{item.nombre} (${item.precio})</span>
              <input
                type="number"
                value={item.cantidad}
                min="1"
                className="w-16 border rounded text-center"
                onChange={(e) => actualizarCantidad(item.id, e.target.value)}
              />
              <button
                onClick={() => eliminar(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Eliminar
              </button>
            </div>
          ))}
          <h3 className="text-xl font-semibold mt-4">Total: ${total}</h3>
          <button
            onClick={() => alert("Pedido confirmado ✅")}
            className="bg-green-600 text-white px-4 py-2 rounded mt-2"
          >
            Confirmar pedido
          </button>
        </div>
      )}
    </div>
  );
}
