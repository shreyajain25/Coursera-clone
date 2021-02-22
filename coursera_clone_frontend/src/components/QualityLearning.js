import React from 'react';
import '../App.css';
import { Container, Row, Col} from 'react-bootstrap';
import quality from '../assets/images/top-quality-image.png';

function QualityLearning() {
    return (
        <Container fluid className="promo">
            <Container>
                <Row>
                    <Col>
                        <b><h1>World-class learning for anyone, anywhere</h1></b>
                    </Col>
                </Row>
                <Row>
                    <Col className="marginPara">
                        <p className="blue"><b>Top Quality</b></p>
                        <p className="header-font">Learn from leading universities and companies</p>
                        <p className="summ-font">Start streaming on-demand video lectures today from top instructors in subjects like <u>business</u>, <u>computer science</u>, <u>data science</u>, <u>language learning</u>, & more.
                        </p>
                    </Col>
                    <Col>
                        <img src ={quality} alt=""/>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default QualityLearning;
