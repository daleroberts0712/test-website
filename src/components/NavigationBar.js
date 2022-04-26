import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

// Built the navigation bar with react-bootstrap
function NavigationBar() {
  return (
    <section id="NavigationBar">
        <Container>
            <Navbar class="left">
                <Nav>
                    <img src="/img/Rectangle 1.png" alt="Rectangle 1" />
                </Nav>
                <Nav class="right">
                    <Nav.Link href="#" id="services">Services</Nav.Link>
                    <Nav.Link href="#" id="work">Work</Nav.Link>
                    <Nav.Link href="#" id="about">About</Nav.Link>
                    <Nav.Link href="#" id="contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    </section>
  )
}

export default NavigationBar