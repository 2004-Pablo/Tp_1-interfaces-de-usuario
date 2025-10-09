import style from './Nosotros.module.css'
//import './Nosotros.css'; 

const Nosotros = () => {
return (
    /*Las clases row y container facilitan el diseño responsivo*/
    <div className={style.aboutUsContainer}> {/*Contenedor con ancho max y py = padding*/}
      <h2 className="text-center">Sobre Nosotros</h2>
      <p className="lead text-center">Conoce más acerca de Luna & Granos Café, nuestra historia, valores y el equipo que hace todo esto posible.</p>

      <div className="row"> {/*Fila 1*/}
        <div className="col-md-6"> {/*Columna 1 de tamaño 6*/}
          <h3>Nuestra Historia</h3>
          <p>
            Luna & Granos Café fue fundada con la misión de ofrecer café de calidad en un ambiente acogedor y moderno. Desde nuestros inicios, nos comprometemos con ofrecer una experiencia única para cada cliente, combinando lo mejor del café con la pasión por la cultura cafetera.
          </p>
        </div>
        <div className="col-md-6"> {/*Columna 2 de tamaño 6*/}
          <h3>Valores</h3>
          <ul>
            <li>Calidad: Solo trabajamos con los mejores granos.</li>
            <li>Compromiso: Estamos dedicados a brindar una experiencia excepcional.</li>
            <li>Sostenibilidad: Apoyamos prácticas ecológicas en todos nuestros procesos.</li>
            <li>Innovación: Siempre buscamos formas nuevas y emocionantes de mejorar.</li>
          </ul>
        </div>
      </div>

      <div className="mt-4" > {/*Margen superior 4*/}
        <h3>Nuestro Equipo</h3>
        <div className="row"> {/*Fila2 */}
          {/*img-fluid = Hace que la imagen sea responsive, es decir, que se ajuste al 
          tamaño del contenedor sin perder proporción*/}
          {/*rounded-circle = Da una forma circular a las imágenes*/}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4"> {/*Columna 1 de tamaño 4*/}           
            <img src="path_to_photo1.jpg" alt="Miembro 1" className="img-fluid rounded-circle" />
            <h5>Juan Pérez</h5>
            <p>Cafetero principal, experto en café de especialidad.</p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4"> {/*Columna 2 de tamaño 4*/}
            <img src="path_to_photo2.jpg" alt="Miembro 2" className="img-fluid rounded-circle" />
            <h5>Ana González</h5>
            <p>Barista, encargada de crear nuestras bebidas únicas.</p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4"> {/*Columna 3 de tamaño 4*/}
            <img src="path_to_photo3.jpg" alt="Miembro 3" className="img-fluid rounded-circle" />
            <h5>David López</h5>
            <p>Gerente, apasionado por el servicio al cliente.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;