import './About.css';
import productimg from './Assets/product-image.png';
import productimg2 from './Assets/product-image-2.png';
import productimg3 from './Assets/product-image-3.png';
import productimg4 from './Assets/product-image-4.png';
import productimg5 from './Assets/product-image-5.png';
import productimg6 from './Assets/product-image-6.png';
import {Container, Row, Col, Image} from 'react-bootstrap';

function About() {
    return (
      <div>
        <Container fluid className="about-green">
          <h1 className='about-title features'>Features</h1>
          <Row>
            <Col className="about-text">
              <h1 className="about-title">Automated Plant Care</h1>
              <p className="about-description">The EcoBox takes care of your plants for you. It provides the perfect amount of water, light, and nutrients, so you don't have to worry about plant care</p>
            </Col>
            <Col className="about-text">
              <h1 className="about-title">Smartphone Control</h1>
              <p className="about-description">Manage your garden from anywhere with the EcoBox smartphone app. Get real-time updates on your plant's growth and adjust settings remotely</p>
            </Col>
            <Col className="about-text">
              <h1 className="about-title">Sizes For Everyone</h1>
              <p className="about-description">The EcoBox is available in various sizes and stylish pot designs, perfect for any kitchen and doubling as decorative accents.</p>
            </Col>
          </Row>
          <Row>
            <Col className="about-img">
              <Image src={productimg} alt="EcoBox Product" className="about-img"  />
            </Col>
            <Col className="about-img">
              <Image src={productimg2} alt="EcoBox App" className="about-img"  />
            </Col>
            <Col className="about-img">
              <Image src={productimg3} alt="EcoBox Sizes" className="about-img"  />
            </Col>
          </Row>
        </Container>
        <Container fluid className="about-white">
          <Row>
              <Col className="about-text">
                <h1 className="about-title">Built-in Timer</h1>
                <p className="about-description">Set the EcoBox to follow a specific growth cycle with the built-in timer, ensuring optimal plant development.</p>
              </Col>
              <Col className="about-text">
                <h1 className="about-title">LED Grow Lights</h1>
                <p className="about-description">The EcoBox features high-quality LED grow lights that mimic natural sunlight, ensuring your plants receive the right amount of light for healthy growth.</p>
              </Col>
              <Col className="about-text">
                <h1 className="about-title">Harvest Fresh Produce</h1>
                <p className="about-description">Enjoy the satisfaction of harvesting fresh, organic produce right from your EcoBox for healthier meals.</p>
              </Col>
            </Row>
            <Row>
              <Col className="about-img">
                <Image src={productimg4} alt="EcoBox with timer" className="about-img"  />
              </Col>
              <Col className="about-img">
                <Image src={productimg5} alt="EcoBox LED Light" className="about-img"  />
              </Col>
              <Col className="about-img">
                <Image src={productimg6} alt="EcoBox Sizes" className="about-img"  />
              </Col>
            </Row>
        </Container>
      </div>
      
    );
}

export default About;
