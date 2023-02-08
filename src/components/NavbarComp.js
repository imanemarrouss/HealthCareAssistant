import React, { Component } from 'react'
import { Navbar,  Nav } from 'react-bootstrap'
import {
   BrowserRouter as Router,
   Routes,
   Route,
    Link
} from "react-router-dom";

import Home from './Home';

import Symptoms from './Symptoms';

import Drug from './Drug';
import Disease from './Disease';



export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar className='navbar' bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">Health Care assistant</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/symptoms">symptoms</Nav.Link>
                         
                                <Nav.Link as={Link} to="/disease">Disease Description</Nav.Link>
                                <Nav.Link as={Link} to="/drug">Drug Description</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <Routes>
        <Route path="/symptoms" element={<Symptoms />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/drug" element={<Drug />} />
    </Routes>
           
            </Router>
        )
    }
}


















