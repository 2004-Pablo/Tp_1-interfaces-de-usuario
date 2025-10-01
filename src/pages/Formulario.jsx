import React, { useState } from "react";

export default function Formulario() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Consulta enviada ✅");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contacto / Reservas</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <input
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          placeholder="Mensaje / Reserva"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-amber-500 text-white px-4 py-2 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
}
