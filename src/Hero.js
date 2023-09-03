import './Hero.css';
import heroImage from './Assets/landing-page-main-pic.png';
import {Container, Row, Col} from 'react-bootstrap';

function Hero() {
    return (
      <Container fluid className="hero">
        <Row>
          <Col className="hero-text">
            <h1 id="hero-title">Experience the Future of Indoor Gardening with EcoGarden GrowBox</h1>
            <p id="hero-description">
              Unlock a world of freshness and sustainability right in your home. The EcoGarden GrowBox revolutionizes indoor gardening, making it effortless to grow your own organic herbs and vegetables year-round. Discover the future of homegrown produce with EcoGarden.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="hero-image">
            <img src={heroImage} alt="hero" />
          </Col>
        </Row>
      </Container>
    );
}

export default Hero;