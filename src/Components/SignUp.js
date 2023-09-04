import '../Components/SignUp.css';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import signUpImage from '../Assets/sign-up-image.png';

function SignUp() {
  return (
    <div>
      <Container fluid className='sign-up'>
        <Row>
          <Col>
            <h2 className='sign-up-heading'>Join the EcoBox Garden Revolution</h2>
            <Image src={signUpImage} alt="EcoBox Product" className="sign-up-img" />
            <p className='sign-up-text'>
              Thank you for exploring the EcoBox Garden, the future of indoor gardening made simple. Don't miss out on the opportunity to transform your home with fresh, homegrown produce and effortless plant care. Be among the first to experience the EcoBox Garden revolution.
            </p>
            <p className='sign-up-text'>
              Sign up today to be notified when our product becomes available for order. Join our community of eco-conscious gardeners and take the first step toward a sustainable and greener future right in your own home. Together, we're redefining the way we connect with nature and nourish our lives.
            </p>
            <p className='sign-up-text'>
              Ready to embark on your indoor gardening journey? Sign up now and be prepared to witness the growth of a healthier and more sustainable lifestyle. Your EcoBox Garden awaits!
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button size="lg" className="sign-up-button">Sign Up</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
