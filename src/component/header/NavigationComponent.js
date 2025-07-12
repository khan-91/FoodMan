import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';



const NavigationComponent = () => {
    return (
        <div>
            <Navbar expand="sm" className="nav-bar" bg="dark" variant='dark'>
                <Container>
                    <Navbar.Brand href="/">FoodMan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link> */}
                            {/* <Nav.Link href="#link">Menu</Nav.Link> */}
                            {/* <Link to="/">Home</Link>
                            <Link to="/menu">Menu</Link>
                            <Link to="/about">About</Link>
                            <Link to="/Contact">Contact</Link> */}
                            {/* <Nav.Link href="#link">Contact</Nav.Link> */}
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/signin">SignIn</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationComponent
