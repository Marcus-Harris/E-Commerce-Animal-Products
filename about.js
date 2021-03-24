import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <h1 className="about-h1">This is About Page</h1>
            <div className="aboutpage-cards">
                <Card className="aboutpage-card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            lorem ljdhf lkjsadh flksajd hf;lajdh f;s
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="aboutpage-card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            lorem ljdhf lkjsadh flksajd hf;lajdh f;s
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default About;
