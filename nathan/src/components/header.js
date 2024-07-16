import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/dronecate.png';

export default function AppHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top"> {/* Ajoutez la classe fixed-top */}
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Logo Dronecate"
            style={{ height: '40px', width: '60px' }}
          /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Ajoutez la classe ms-auto */}
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#about">A propos de nous</Nav.Link>
            <Nav.Link href="#services">Nos Services</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
