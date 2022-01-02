import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse } from 'reactstrap';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <Navbar isOpen={isOpen} expand="md" full dark>
                <NavbarBrand href="/">WURKLO</NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(isOpen ? false : "isOpen")} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className="justify-content-end mobile-link" style={{ width: "100%" }}>
                        <NavItem><NavLink onClick={() => setIsOpen(false)} to="#">About</NavLink></NavItem>
                        <NavItem><NavLink onClick={() => setIsOpen(false)} to="#">Roadmap</NavLink></NavItem>
                        <NavItem><NavLink onClick={() => setIsOpen(false)} to="#">Contact</NavLink></NavItem>
                        <NavItem><NavLink onClick={() => setIsOpen(false)} to="#">Store</NavLink></NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </nav>
    );
};

export default Header;