import './About.css';
import productimg from './Assets/product-image.png';
import productimg2 from './Assets/product-image-2.png';
import {Container, Row, Col, Image} from 'react-bootstrap';

function About() {
    return (
      <div>
        <Container fluid className="about-green">
          <Row>
            <Col md={6} className="about-text">
              <h1 className="about-title">Automated Plant Care</h1>
              <p className="about-description">The EcoBox takes care of your plants for you. It provides the perfect amount of water, light, and nutrients, so you don't have to worry about plant care.</p>
            </Col>
            <Col md={6} className="about-img">
              <Image src={productimg} alt="EcoBox Product" className="about-img"  />
            </Col>
          </Row>
        </Container>
        <Container fluid className="about-white">
          <Row>
            <Col md={{ span: 6, order: 2 }} className="about-text">
                <h1 className="about-title">Smartphone Control</h1>
                <p className="about-description">Manage your garden from anywhere with the EcoBox smartphone app. Get real-time updates on your plant's growth and adjust settings remotely.</p>
            </Col>
            <Col md={{ span: 6, order: 1 }} className="about-img">
              <Image src={productimg2} alt="EcoBox Product" className="about-img"  />
            </Col>
          </Row>
        </Container>
      </div>
      
    );
}

export default About;
