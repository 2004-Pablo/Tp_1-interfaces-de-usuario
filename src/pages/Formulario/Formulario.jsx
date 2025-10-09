import React, { useState } from "react";
import { Button, FormLabel, Form, FormControl, FormGroup } from "react-bootstrap";
import styles from "./Formulario.module.css";

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
    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/
    if (!nombreRegex.test(form.nombre)) {
      setError("El nombre solo puede contener letras y espacios.")
      setValido(false)
      return
    }
    if (!form.mail.trim()){
      setError("El email es obligatorio.")
      setValido(false)
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.mail)) {
      setError("El email no tiene un formato válido.")
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
    setTimeout(() => setValido(false), 2000)
    setForm({ nombre: "", mail: "", dia: "", hora: "", mensaje: "" }) 
  }

  const handleFormInput = (e) => {
    const { name, value } = e.target
    setForm({...form, [name] : value })
  }

  return (
  <div className={styles.formContainer}>
    <h1 className={styles.formTitle}>Contacto y Reservas</h1>
    <p className={styles.formDescription}>
      ¿Querés hacer una reserva o tenés alguna consulta?
      Completa el formulario y nos pondremos en contacto contigo.
    </p>

    <h2 className={styles.sectionTitle}>Formulario de Reserva</h2>
    <p className={styles.requiredText}>Todos los campos son obligatorios</p>

    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel className={styles.label}>Nombre completo</FormLabel>
        <FormControl
          className={styles.input}
          type="text"
          name="nombre"
          placeholder="Tu nombre completo"
          value={form.nombre}
          onChange={handleFormInput}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel className={styles.label}>Email</FormLabel>
        <FormControl
          className={styles.input}
          type="text"
          name="mail"
          placeholder="tu@email.com"
          value={form.mail}
          onChange={handleFormInput}
        />
      </FormGroup>

      <div style={{ display: "flex", gap: "10px" }}>
        <FormGroup style={{ flex: 1 }}>
          <FormLabel className={styles.label}>Fecha de la reserva</FormLabel>
          <FormControl
            className={styles.input}
            type="date"
            name="dia"
            value={form.dia}
            onChange={handleFormInput}
          />
        </FormGroup>

        <FormGroup style={{ flex: 1 }}>
          <FormLabel className={styles.label}>Hora de la reserva</FormLabel>
          <FormControl
            className={styles.input}
            type="time"
            name="hora"
            value={form.hora}
            onChange={handleFormInput}
          />
        </FormGroup>
      </div>

      <FormGroup>
        <FormLabel className={styles.label}>Mensaje o detalles de la reserva</FormLabel>
        <textarea
          className={styles.textarea}
          name="mensaje"
          rows={4}
          placeholder="Cuéntanos sobre tu reserva..."
          value={form.mensaje}
          onChange={handleFormInput}
        />
      </FormGroup>

      <Button className={styles.submitButton} type="submit">
        Enviar
      </Button>

      {error && <p className={styles.errorMessage}>{error}</p>}
      {valido && <p className={styles.successMessage}>El formulario se envió exitosamente ✅</p>}
    </Form>
  </div>

  );
}
