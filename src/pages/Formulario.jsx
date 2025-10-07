import React, { useState } from "react";
import { Button, FormLabel, Form, FormControl, FormGroup } from "react-bootstrap";

export default function Formulario() {

  const [form, setForm] = useState({nombre: "", mail: "", dia: "", hora: "", mensaje: ""})

  const [error, setError] = useState("")

  const [valido, setValido] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    if (!form.nombre.trim()){
      setError("El nombre es obligatorio.")
      setValido(false)
      return
    }
    if (!form.mail.trim()){
      setError("El email es obligatorio.")
      setValido(false)
      return
    }
    if (form.dia == ""){
      setError("La fecha es obligatoria.")
      setValido(false)
      return
    }
    if (form.hora == ""){
      setError("La hora es obligatoria.")
      setValido(false)
      return
    }
    if (!form.mensaje.trim()){
      setError("Los detalles de la reserva son obligatorios.")
      setValido(false)
      return
    }
    setError("")
    setValido(true)
    setForm({ nombre: "", mail: "", dia: "", hora: "", mensaje: "" }) 
  }

  const handleFormInput = (e) => {
    const { name, value } = e.target
    setForm({...form, [name] : value })
  }

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
        <Form onSubmit={handleSubmit} className="">
          <FormGroup>
            <FormLabel htmlFor="nombreForm">Nombre Completo: </FormLabel>
            <FormControl
              type="text"
              name="nombre"
              id="nombreForm"
              placeholder="Nombre"
              onChange={handleFormInput}
              value={form.nombre}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="mailForm">Email </FormLabel>
            <FormControl
              type="email"
              name="mail"
              id="mailForm"
              placeholder="Email"
              onChange={handleFormInput}
              value={form.mail}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="diaReservaForm">Fecha de la reserva </FormLabel>
            <FormControl
              type="date"
              name="dia"
              id="diaReservaForm"
              min="2025-01-01"
              max="2025-12-31"
              value={form.dia} // Problema para mostrar
              onChange={handleFormInput}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="horaReservaForm">Hora de la reserva </FormLabel>
            <FormControl
              type="time"
              name="hora"
              id="horaReservaForm"
              min="15:00"
              max="19:00"
              onChange={handleFormInput}
              value={form.hora}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="mensajeForm">Mensaje o Detalles de la reserva </FormLabel>
            <textarea
              name="mensaje"
              id="mensajeForm"
              placeholder="Cuéntanos sobre tu reserva: número de personas, ocasión especial, preferencias alimentarias, etc."
              rows={4}
              onChange={handleFormInput}
              value={form.mensaje}
            />
          </FormGroup>          
          <Button variant="success" type="submit">Enviar Reserva</Button>
          {error && <p style={{color:'red'}}>{error}</p>}
          {valido && <p style={{color:'green'}}>El Formulario se envío exitosamente.</p>}
        </Form>
      </div>
    </div>
  );
}
