import React from 'react';
import '../App.css';
import { Container, Row, Col} from 'react-bootstrap';
import illinois from '../assets/images/illinois.svg';
import imperial from '../assets/images/imperial.png';
import duke from '../assets/images/duke_updated_2020.png';
import google from '../assets/images/google.png';
import ibm from '../assets/images/ibm.png';
import umich from '../assets/images/umich.png';
import penn from '../assets/images/penn.svg';
import stanford from '../assets/images/stanford.svg';

function Collaborate() {
    return (
        <Container fluid className="collaborate">
            <Row>
                <div>
                    <b>
                        <p style={{fontSize: '1.5rem', textAlign: 'center'}}>We collaborate with <u>200+ leading universities and companies</u></p>
                    </b>
                </div>
            </Row>
            <Row>
                <Container>
                    <Row>
                        <Col><img src ={illinois} alt=""/></Col>
                        <Col><img src ={duke} alt=""/></Col>
                        <Col><img src ={google} alt=""/></Col>
                        <Col><img src ={umich} alt=""/></Col>
                        <Col><img src ={ibm} alt=""/></Col>
                        <Col><img src ={imperial} alt=""/></Col>
                        <Col><img src ={stanford} alt=""/></Col>
                        <Col> <img src ={penn} alt=""/></Col>
                    </Row>    
                </Container>
            </Row>
        </Container>
    )
}

export default Collaborate;