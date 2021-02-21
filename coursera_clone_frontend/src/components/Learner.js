import React from 'react';
import '../App.css';
import { Button} from '@material-ui/core';
import { Container, Row, Col} from 'react-bootstrap';
import outcomes from '../assets/images/outcomes.png';

function Learner() {
    return (
        <Container fluid className="learn">
            <Row>
                <Col>
                    <div><img  style={{ margin: '-5%'}} src={outcomes} alt="" /></div>
                </Col>
                <Col className="promo">
                    <p className="header-font">Learner outcomes on Coursera</p>
                    <p className="summ-font"><b>87% of people learning </b>for professional development <b>report career benefits</b> like getting a promotion, a raise, or starting a new career</p>
                    <p>-&nbsp;Coursera Learner Outcomes Survey (2019)</p>
                    <Button style={{ padding: '2%'}} variant="contained" color="primary" disableElevation>Join for Free</Button>
                    <button style={{ margin: "10px", color: 'blue' ,padding: '2%'}}>Try Coursera For Business</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Learner
