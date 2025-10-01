import React from "react";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a Luna & Granos Café</h1>
      <p className="mb-6">Bienvenidos a Luna & Granos Café, un espacio donde el aroma del café
        recién molido se mezcla con momentos únicos. Descubrí nuestra carta de
        productos, creados para acompañar tus mejores instantes.</p>
      <Link to="/carta" className="bg-amber-500 text-white px-4 py-2 rounded">
        Ver Carta
      </Link>
    </div>
  );
}
