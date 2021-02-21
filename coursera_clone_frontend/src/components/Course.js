import React from 'react';
import { Button } from '@material-ui/core';
import { Container, Row, Col} from 'react-bootstrap';
import hero from '../assets/images/hero-b.png';

function Course() {
    return (
        <div>
            <Container maxWidth="lg" className="marginPara">
                <Row>
                    <Col className="marginPara">
                        <div>
                            <div>
                                <b>
                                    <h1 style={{fontSize: '5rem', padding: '10px'}}>Your Course
                                    to Success</h1>
                                </b>
                            </div>
                            <p style={{fontSize: '1.2rem'}}>Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
                            <Button variant="contained" color="primary" disableElevation>Join for Free</Button>
                        </div>
                    </Col>
                    <Col><img src={hero}></img></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Course;
