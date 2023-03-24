import { useState, useEffect, useRef } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import '../../App.css'


const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const navRef = useRef(null);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const [toggle, setToggle] = useState(false);
    const handleLinkClick = () => {
        setToggle(!toggle);
    };

    console.log(activeLink)

    return (
        <Router>
            <Navbar collapseOnSelect expand="lg" className={scrolled ? "scrolled" : ""} ref={navRef}>
                <Container>
                    <Navbar.Brand href="#home">
                        <span className="rep">Daniela Castillo</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={() => { onUpdateActiveLink('home'); handleLinkClick() }}>Home</Nav.Link>
                            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : "navbar-link"} onClick={() => { onUpdateActiveLink('about'); handleLinkClick() }}>About</Nav.Link>
                            <Nav.Link href="#work" className={activeLink === 'work' ? 'active navbar-link' : "navbar-link"} onClick={() => { onUpdateActiveLink('work'); handleLinkClick() }}>Work</Nav.Link>
                            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : "navbar-link"} onClick={() => { onUpdateActiveLink('contact'); handleLinkClick() }}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}

export default NavBar