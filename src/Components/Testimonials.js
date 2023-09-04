import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Container, Card } from 'react-bootstrap';
import './Testimonials.css';

function Testimonials() {
    return (
        <Container fluid className='testimonial-container'>
            <h1 className='title'>Testimonials</h1>
            <Carousel
                className='carousel'
                showArrows={false}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={8000}
            >
                <div className='testimonial'>
                    <Card className='testimonial-card'>
                        <Card.Body>
                            <Card.Title className='testimonial-stars'>
                                <span className='stars-span'>&#11088; &#11088; &#11088; &#11088; &#11088;</span>
                            </Card.Title>
                            <Card.Title className='testimonial-title'>Jane T.</Card.Title>
                            <Card.Text className='testimonial-text'>
                                <p>The EcoBox Garden has transformed my home. I never thought I could have fresh herbs and greens all year round, but with this amazing system, I do. It's a game-changer!</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='testimonial'>
                    <Card className='testimonial-card'>
                        <Card.Body>
                            <Card.Title className='testimonial-stars'>
                                <span className='stars-span'>&#11088; &#11088; &#11088; &#11088; &#11088;</span>
                            </Card.Title>
                            <Card.Title className='testimonial-title'>John D.</Card.Title>
                            <Card.Text className='testimonial-text'>
                                <p>As someone with a busy lifestyle, the EcoBox Garden has been a lifesaver. I get to enjoy homegrown produce without the hassle of traditional gardening. Plus, it looks fantastic in my kitchen!</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='testimonial'>
                    <Card className='testimonial-card'>
                        <Card.Body>
                            <Card.Title className='testimonial-stars'>
                                <span className='stars-span'>&#11088; &#11088; &#11088; &#11088; &#11088;</span>
                            </Card.Title>
                            <Card.Title className='testimonial-title'>Lisa M.</Card.Title>
                            <Card.Text className='testimonial-text'>
                                <p>I'm not the greenest thumb, but the EcoBox Garden makes me feel like a gardening pro. It's so easy to use, and I love the convenience of harvesting my own veggies whenever I want.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='testimonial'>
                    <Card className='testimonial-card'>
                        <Card.Body>
                            <Card.Title className='testimonial-stars'>
                                <span className='stars-span'>&#11088; &#11088; &#11088; &#11088; &#11088;</span>
                            </Card.Title>
                            <Card.Title className='testimonial-title'>Michael S.</Card.Title>
                            <Card.Text className='testimonial-text'>
                                <p>I've always been passionate about sustainability, and the EcoBox Garden aligns perfectly with my values. It's eco-friendly, efficient, and the results are impressive. I highly recommend it to fellow eco-warriors!</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='testimonial'>
                    <Card className='testimonial-card'>
                        <Card.Body>
                            <Card.Title className='testimonial-stars'>
                                <span className='stars-span'>&#11088; &#11088; &#11088; &#11088; &#11088;</span>
                            </Card.Title>
                            <Card.Title className='testimonial-title'>Sarah G.</Card.Title>
                            <Card.Text className='testimonial-text'>
                                <p>The EcoBox Garden has become a conversation starter in my home. It's not only practical but also an eye-catching addition to my living space. I'm proud to show it off to guests.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='testimonial'>
                    <Card className='testimonial-card'>
                        <Card.Body>
                            <Card.Title className='testimonial-stars'>
                                <span className='stars-span'>&#11088; &#11088; &#11088; &#11088; &#11088;</span>
                            </Card.Title>
                            <Card.Title className='testimonial-title'><i class="bi bi-star-fill"></i></Card.Title>
                            <Card.Title className='testimonial-title'>David H.</Card.Title>
                            <Card.Text className='testimonial-text'>
                                <p>I bought the EcoBox Garden for my elderly parents, and it's been a blessing. They enjoy gardening without the physical strain, and I have peace of mind knowing they're eating fresh, healthy produce.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Carousel>
        </Container>
    );
}

export default Testimonials;
