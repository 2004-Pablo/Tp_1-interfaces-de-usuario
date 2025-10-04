import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Carta from "./pages/Carta";
import Carrito from "./pages/Carrito";
import Formulario from "./pages/Formulario";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;