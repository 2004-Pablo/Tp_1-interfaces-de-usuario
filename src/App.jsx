import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Inicio from "./pages/Inicio/Inicio.jsx";
import Carta from "./pages/Carta/Carta.jsx";
import Carrito from "./pages/Carrito/Carrito.jsx";
import Formulario from "./pages/Formulario/Formulario.jsx";
import Nosotros from "./pages/Nosotros/Nosotros.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  // Estado global del carrito
  const [carrito, setCarrito] = useState([]);

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);
    
    if (productoExistente) {
      // Si el producto ya existe, incrementar la cantidad
      setCarrito(carrito.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ));
    } else {
      // Si es un producto nuevo, agregarlo con cantidad 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/carta" element={<Carta onAdd={agregarAlCarrito} />} />
        <Route path="/carrito" element={<Carrito carrito={carrito} setCarrito={setCarrito} />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;