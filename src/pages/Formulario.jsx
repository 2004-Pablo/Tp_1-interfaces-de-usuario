import React, { useState } from "react";

export default function Formulario() {

  const [form, setForm] = useState({nombre: "", mail: "", dia: "", hora: "", mensaje: ""})

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert("El Formulario se ha enviado");
    setForm({ nombre: "", mail: "", dia: "", hora: "", mensaje: "" });
    console.log(nombre)
  }

    const handleNombreInput = (e) => {
    setForm({ ...form, nombre: e.target.value });
  };

    const handleMailInput = (e) => {
    setForm({ ...form, mail: e.target.value });
  };

    const handleDiaInput = (e) => {
    setForm({ ...form, dia: e.target.value });
  };

    const handleHoraInput = (e) => {
    setForm({ ...form, hora: e.target.value });
  };

    const handleMensajeInput = (e) => {
    setForm({ ...form, mensaje: e.target.value });
  };

  return (
    <div className="">
      <div className="">
        <h1>Contacto y Reservas</h1>
        <p className="">
          ¿Querés hacer una reserva o tenés alguna consulta? 
          Completa el formulario y nos pondremos en contacto contigo.
        </p>
      </div>

      <div>
        <h2>Formulario de Reserva</h2>
        <form onSubmit={handleSubmit} className="">
          <fieldset>
            <label htmlFor="nombre">Nombre Completo: </label>
            <input
              type="text"
              id="nombre"
              onChange={handleNombreInput}
              value={form.nombre}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="mail">Email </label>
            <input
              type="email"
              id="mail"
              onChange={handleMailInput}
              value={form.mail}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="diaReserva">Fecha de la reserva </label>
            <input
              type="date"
              id="diaReserva"
              onChange={handleDiaInput}
              value={form.dia}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="horaReserva">Hora de la reserva </label>
            <input
              type="time"
              id="horaReserva"
              onChange={handleHoraInput}
              value={form.hora}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="mensaje">Mensaje o detalles de la reserva </label>
            <textarea
              id="mensaje"
              onChange={handleMensajeInput}
              value={form.mensaje}
            />
          </fieldset>
          <button>Enviar Reserva</button>
        </form>
      </div>
    </div>
  );
}
