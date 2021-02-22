import React from 'react';
import { Button, AppBar, Toolbar, TextField, Input } from '@material-ui/core';
import {Container, Row, Col} from 'react-bootstrap';
import '../App.css';
import logo from '../assets/images/logo.svg';

// color: #0056F2 
function Header() {
    return (
        <Container fluid>
            <AppBar position="fixed" color="inherit">
                <Toolbar>
                    <Row>
                        <Col>
                            <img style={{width: '20%'}} src={logo} alt="logo"/>
                            <Button variant="contained" color="primary">Explore &nbsp; <span><i className ="fa fa-chevron-down"></i></span></Button>
                            <TextField placeholder="What do you want to learn?">
                                <span><i className="fa fa-search" color="primary"></i></span>
                            </TextField>
                        </Col>
                        <Col>
                            <Button variant="contained">For Enterprise &nbsp;&nbsp; <span><i className ="fa fa-chevron-down"></i></span></Button>
                            <Button href="#text-buttons" color="primary">Log In</Button>
                            <Button variant="contained" color="primary" disableElevation>Join for Free</Button>
                        </Col>
                    </Row>
                </Toolbar>
            </AppBar>
        </Container>
    )
}

export default Header;
