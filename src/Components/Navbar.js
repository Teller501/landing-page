import './Navbar.css';
import logo from '../logo.svg';
import {Navbar, Container, Nav} from 'react-bootstrap';

function NavbarE() {
    return (
      <Navbar className='navbar' id='navbar'>
        <Container fluid>
          <Navbar.Brand href="#Home" >
            <img id="logo" src={logo} alt="EcoBox Logo"></img>
          </Navbar.Brand>
          <Nav className="justify-content-center" id='nav-links'>
            <Nav.Link href="#About" className='nav-link'>About</Nav.Link>
            <Nav.Link href="#How-it-works" className='nav-link'>How It Works</Nav.Link>
            <Nav.Link href="#Testimonials" className='nav-link'>Testimonials</Nav.Link>
            <Nav.Link href="#Preorder" id='preorder' className='nav-link'>Pre-order Now</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
  
  export default NavbarE;
