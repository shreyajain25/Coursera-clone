import React from 'react';
import '../App.css';
import { Container, Row, Col} from 'react-bootstrap';
import quality from '../assets/images/applied-learning.png';

function AppliedLearning() {
    return (
        <Container fluid className="promo">
            <Row>
                <Col className="marginPara">
                    <p className="blue"><b>Applied Learning</b></p>
                    <p className="header-font">Master skills with in-depth learning</p>
                    <p className="summ-font">
                    Apply what you learn with self-paced quizzes and hands-on projects. Get feedback from a global community of learners.
                    </p>
                </Col>
                <Col>
                    <img src ={quality} alt=""/>
                </Col>
            </Row>
        </Container>
    )
}

export default AppliedLearning;
