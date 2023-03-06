import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";


const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <span className="rep">Daniela Castillo</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('Home')}>Home</Nav.Link>
                        <Nav.Link href="#About" className={activeLink === 'About' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('About')}>About</Nav.Link>
                        <Nav.Link href="#Work" className={activeLink === 'Work' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('Work')}>Work</Nav.Link>
                        <Nav.Link href="#Contact" className={activeLink === 'Contact' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('Contact')}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar