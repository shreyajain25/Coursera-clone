import React from 'react';
import '../App.css';
import { Container, Row, Col} from 'react-bootstrap';
import accessible from '../assets/images/accessible-bigger.svg';

function Accessible() {
    return (
        <Container fluid className="promo">
            <Row>
                <Col>
                    <img id ="mobileimg" src ={accessible} alt =""/>
                </Col>
                <Col className="marginPara">
                    <p className="blue"><b>Accessible</b></p>
                    <p className="header-font">Find flexible, affordable options</p>
                    <p className="summ-font">
                    Choose from many options including free courses and <u>university degrees</u> at a breakthrough price. Learn at your own pace, 100% online.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Accessible;
