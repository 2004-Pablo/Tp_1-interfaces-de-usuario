import style from "./Footer.module.css"

export default function Footer() {
    //<p>© 2024 Luna & Granos Café. Todos los derechos reservados.</p>
  return (
    <footer className={style.footerContainer}>
        <div className={style.boxLinks}>
            <h3>Negocio</h3>
            <ul>
                <li>Trabaja con nosotros</li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div className={style.boxLinks}>
            <h3>Ayuda</h3>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div className={style.boxLinks}>
            <h3>Redes Sociales</h3>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            
        </div>
    </footer>
  )
}
