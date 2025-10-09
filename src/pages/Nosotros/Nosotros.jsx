import React, { useEffect, useState } from 'react';
import style from './Nosotros.module.css'

const Nosotros = () => {
  const [animacionVisible, setAnimacionVisible] = useState(false);

  // useEffect para activar la animación cuando se monta el componente
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimacionVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${style.aboutUsContainer} ${animacionVisible ? style.fadeIn : ''}`}>
      <h2 className="text-center mb-4">Sobre Luna & Granos Café</h2>
      <p className="lead text-center mb-5">
        Descubre la historia detrás de nuestro café artesanal y la pasión que nos mueve cada día.
      </p>

      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <h3>🌙 Nuestra Historia</h3>
          <p>
            Luna & Granos Café nació en 2020 con un sueño simple pero poderoso: crear un espacio donde 
            el café excepcional se encuentre con momentos memorables. Fundada por amantes del café con 
            más de 15 años de experiencia en la industria, nuestra cafetería se ha convertido en el 
            corazón de la comunidad local.
          </p>
          <p>
            Cada grano es seleccionado cuidadosamente de fincas sostenibles de América Latina, 
            tostado artesanalmente en nuestras instalaciones para garantizar la máxima frescura y sabor.
          </p>
        </div>
        <div className="col-md-6 mb-4">
          <h3>☕ Nuestros Valores</h3>
          <ul className={style.valuesList}>
            <li><strong>Calidad Premium:</strong> Solo los mejores granos de origen único</li>
            <li><strong>Sustentabilidad:</strong> Comercio justo y prácticas eco-amigables</li>
            <li><strong>Comunidad:</strong> Un espacio acogedor para todos</li>
            <li><strong>Artesanía:</strong> Cada taza preparada con maestría y cariño</li>
            <li><strong>Innovación:</strong> Constantemente explorando nuevos sabores</li>
          </ul>
        </div>
      </div>

      <div className="mb-5">
        <h3 className="text-center mb-4">🏆 Lo que nos hace únicos</h3>
        <div className="row">
          <div className="col-md-4 text-center mb-4">
            <div className={style.featureCard}>
              <h4>Tostado Artesanal</h4>
              <p>Tostamos nuestros granos en pequeños lotes para garantizar frescura y perfil de sabor único</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className={style.featureCard}>
              <h4>Origen Directo</h4>
              <p>Trabajamos directamente con productores para asegurar calidad y comercio justo</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className={style.featureCard}>
              <h4>Experiencia Completa</h4>
              <p>No solo servimos café, creamos momentos especiales para nuestros clientes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="mb-3">📍 Visítanos</h3>
        <p className="lead">
          <strong>Horarios:</strong> Lunes a Domingo 7:00 AM - 10:00 PM<br/>
          <strong>Ubicación:</strong> En el corazón de la ciudad, donde el aroma del café te guía hasta nosotros
        </p>
        <p className="mt-4">
          <em>"Cada taza cuenta una historia, cada sorbo crea un recuerdo"</em>
        </p>
      </div>
    </div>
  );
};

export default Nosotros;