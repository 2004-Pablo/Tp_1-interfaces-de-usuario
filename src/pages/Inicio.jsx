import { Link } from "react-router-dom";
import style from "../stylesPages/inicio.module.css"

export default function Inicio() {
  return (
    <div >
      <div className={style.containerInicio}>

        <h2 className={style.subTitulo}>Bienvenido a Luna & Granos Café</h2>

        <p className={style.textDescription}>
          Bienvenidos a Luna & Granos Café, un espacio donde el aroma del café
          recién molido se mezcla con momentos únicos. Descubrí nuestra carta de
          productos, creados para acompañar tus mejores instantes.
        </p>

        <Link to="/carta">
          Ver Carta
        </Link>
      </div>
      <section>
        <p>section 1</p>
      </section>
      <section>
        <p>section 2</p>
      </section>
      <section>
        <p>section 3</p>
      </section>
    </div>
  );
}
