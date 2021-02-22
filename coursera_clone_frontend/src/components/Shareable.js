import React from 'react';
import '../App.css';
import { Container, Row, Col} from 'react-bootstrap';
import shareable from '../assets/images/certificate-crop.png';

function Shareable() {
    return (
        <Container fluid className="promo">
            <Container>
                <Row>
                    <Col>
                        <img src ={shareable} alt =""/>
                    </Col>
                    <Col className="marginPara">
                        <p className="blue"><b>Shareable Certificates</b></p>
                        <p className="header-font">Earn industry-recognized credentials</p>
                        <p className="summ-font">Demonstrate your new skills by sharing your Course Certificate, <u>Professional Certificate, MasterTrack™ Certificate</u>, or diploma with your network.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Shareable;
