import { Link } from "react-router-dom";
import style from "./inicio.module.css";
import cafeImage from "/backgroundDeInicio.jpg";

export default function Inicio() {
  return (
    <main className={style.containerInicio}>
      <div className={style.textSection}>
        <h2 className={style.subTitulo}>Luna & Granos Café</h2>

        <p className={style.textDescription}>
          Bienvenidos a nuestra cafetería, donde cada taza cuenta una historia.
          Desde 2020, servimos el mejor café artesanal de la ciudad, acompañado
          de deliciosas pastelerías caseras.
        </p>

        <Link to="/carta" className={style.buttomCard}>
          Ver Nuestra Carta
        </Link>
      </div>

      <div className={style.imageContainer}>
        <img src={cafeImage} alt="Interior del café" />
      </div>
    </main>
  );
}
