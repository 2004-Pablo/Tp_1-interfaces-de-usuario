import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import styles from "./NavigationBar.module.css";

//Ver si uso bootstrap y otra cosa y adaptar segun qué elija
// <Navbar.Brand as={Link} to="/">Unahur</Navbar.Brand>
function NavigationBar({ carrito }) {
  // Calcular total de productos en el carrito
  const totalProductos = carrito ? carrito.reduce((total, item) => total + item.cantidad, 0) : 0;
  
  return (  
    /*Componentes de react-bootstrap*/
    <Navbar expand="lg" /*className="bg-body-tertiary"*/>
      <Container>      
        <Navbar.Toggle /*aria-controls="basic-navbar-nav"*/ />
        <Navbar.Collapse /*id="basic-navbar-nav"*/>
          <Nav /*className="me-auto"*/>
            <Nav.Link as={NavLink} to="/" className={styles.navLink}>Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/carta" className={styles.navLink}>Carta</Nav.Link>
            <Nav.Link as={NavLink} to="/carrito" className={styles.navLink}>
              Carrito {totalProductos > 0 && (
                <Badge bg="danger" className={styles.badge}>
                  {totalProductos}
                </Badge>
              )}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/formulario" className={styles.navLink}>Formulario</Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros" className={styles.navLink}>Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;