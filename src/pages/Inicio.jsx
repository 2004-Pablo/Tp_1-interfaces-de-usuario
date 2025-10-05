import { Link } from "react-router-dom";
import { useState } from "react";
import style from "../stylesPages/inicio.module.css"
import ProductCard from "../components/ProductCard/ProductCard.jsx";

export default function Inicio() {

  const [productos, setProductos] = useState(
    [
      { id: 1, nombre: "Moccha", precio: 6100, img: "/moccha.jpg" },
      { id: 2, nombre: "Medialuna", precio: 750, img: "/medialuna.jpg" },
      { id: 3, nombre: "Brownie", precio: 3000, img: "/brownie.jpg" },
      { id: 4, nombre: "Moccha", precio: 6100, img: "/moccha.jpg" }    
    ]
  )

  return (
    <div>
      <div className={style.containerInicio}>

        <h2 className={style.subTitulo}>Bienvenido a Luna & Granos Café</h2>

        <p className={style.textDescription}>
          Bienvenidos a Luna & Granos Café, un espacio donde el aroma del café
          recién molido se mezcla con momentos únicos. Descubrí nuestra carta de
          productos, creados para acompañar tus mejores instantes.
        </p>

        <Link to="/carta" className={style.buttomCard}>Ver Carta</Link>
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
        <h3>Nuestros productos destacados</h3>
        <div className={style.productsDestacados}>
          {
            productos.map( p => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
                <ProductCard 
                  producto={p} 
                  onAdd={""} 
                />
              </div>  
            ) )
          }
        </div>
      </section>
    </div>
  );
}
