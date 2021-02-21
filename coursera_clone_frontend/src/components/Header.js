import React from 'react';
import { Button, AppBar, Toolbar, Typography, TextField, Input } from '@material-ui/core';
import '../App.css';
import logo from '../assets/images/logo.svg';

// color: #0056F2 
function Header() {
    return (
        <div>
            <AppBar position="fixed" color="inherit">
                <Toolbar>
                    <img style={{width: '10%', borderRight: '5px'}} src={logo} alt="logo"/>
                    <Button variant="contained" color="primary">Explore &nbsp; <span><i className ="fa fa-chevron-down"></i></span></Button>
                    <Input placeholder="What do you want to learn?">
                        <span><i className="fa fa-search" color="primary"></i></span>
                    </Input >
                    <Button variant="contained">For Enterprise &nbsp;&nbsp; <span><i className ="fa fa-chevron-down"></i></span></Button>
                    <Button href="#text-buttons" color="primary">Log In</Button>
                    <Button variant="contained" color="primary" disableElevation>Join for Free</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
