import React from 'react';
import '../App.css';
import { Container, Row, Col} from 'react-bootstrap';
import Learn from '../assets/images/Icon-Learn.svg';
import Ready from '../assets/images/Icon-Get-Ready.svg';
import Earn from '../assets/images/Icon-Earn-Degree.svg';
import Upskill from '../assets/images/Icon-Upskill-your-org.svg';


function Acheive() {
    return (
        <Container fluid className="promo">
            <Row>
                <Col>
                    <h1>Achieve your goals with Coursera</h1>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col>
                        <img src ={Learn} alt =""/>
                        <h5>Learn the latest skills</h5>
                        <p>like business analytics, graphic design, Python, and more</p>
                    </Col>
                    <Col>
                        <img src ={Ready} alt =""/>
                        <h5>Get ready for a career</h5>
                        <p>in high-demand fields like IT, AI and cloud engineering</p>
                    </Col>
                    <Col>
                        <img src ={Earn} alt =""/>
                        <h5>Earn a degree</h5>
                        <p>from a leading university in business, computer science, and more</p>
                    </Col>
                    <Col>
                        <img src ={Upskill} alt =""/>
                        <h5>Upskill your organization</h5>
                        <p>with on-demand training and development programs</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Acheive;
