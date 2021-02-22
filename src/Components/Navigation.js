import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Navbar expand="lg" className="navigation">
                        <Navbar.Brand className="topic" href="#home"><b>Read To Love</b></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="main-nav ml-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Books</Nav.Link>
                                <Nav.Link href="#link">Add Book</Nav.Link>
                                <Nav.Link href="#link">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>

            </div>
        )
    }
}

export default Navigation;
