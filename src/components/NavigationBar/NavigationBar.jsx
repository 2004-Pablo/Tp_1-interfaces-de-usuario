import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//Ver si uso bootstrap y otra cosa y adaptar segun qué elija
// <Navbar.Brand as={Link} to="/">Unahur</Navbar.Brand>
function NavigationBar() {
  return (  
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/carta">Carta</Nav.Link>
            <Nav.Link as={NavLink} to="/carrito">Carrito</Nav.Link>
            <Nav.Link as={NavLink} to="/formulario">Formulario</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;