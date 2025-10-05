import { Link } from "react-router-dom";
import style from "../stylesPages/inicio.module.css"

export default function Inicio() {
  return (
    <div>
      <div className={style.containerInicio}>

        <h2 className={style.subTitulo}>Bienvenido a Luna & Granos Café</h2>

        <p className={style.textDescription}>
          Bienvenidos a Luna & Granos Café, un espacio donde el aroma del café
          recién molido se mezcla con momentos únicos. Descubrí nuestra carta de
          productos, creados para acompañar tus mejores instantes.
        </p>

        <Link to="/carta">Ver Carta</Link>
      </div>
      <section className={style.sectionContainer}>
        <div>
          <h3>Acerca de nosotros</h3>
          <p>
            En Luna & Granos, creemos que el café es más que una bebida: es una forma de conectar. Nuestro espacio está diseñado para inspirar, crear y disfrutar, ya sea que vengas a trabajar, reunirte o simplemente desconectar. Usamos granos de origen, métodos de preparación artesanales y acompañamientos frescos que reflejan nuestro compromiso con la calidad y la comunidad.
          </p>
        </div>
        <img
          src="/granos_de_caffe.jpg" 
          alt="" 
          className={style.aboutUsImg}
        />
      </section>
      <section className={style.sectionContainer2}>
        <p>section 2</p>
      </section>
      <section className={style.sectionContainer3}>
        <p>section 3</p>
      </section>
    </div>
  );
}
