import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse, NavbarText, Button } from 'reactstrap';
import coin from '../images/wurklo-coin';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>

            <Navbar isOpen={isOpen} expand="md" full dark>
                <NavbarBrand href="/">
                    <img src={coin} className="navbar-coin" alt="Wurklo logo" />
                    Wurklo
                    <div className="divider"></div>
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(isOpen ? false : "isOpen")} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className="justify-content-start" style={{ width: "100%" }}>
                        <NavItem><NavLink onClick={() => setIsOpen(false)} to="#">About</NavLink></NavItem>
                        <NavItem><NavLink onClick={() => setIsOpen(false)} to="#">NEx Program</NavLink></NavItem>
                        <NavItem><NavLink onClick={() => setIsOpen(false)} to="#">Store</NavLink></NavItem>
                        <NavItem><NavLink onClick={() => setIsOpen(false)} to="#">NFT</NavLink></NavItem>
                        {/* <NavItem><NavLink onClick={() => setIsOpen(false)} to="#">Download</NavLink></NavItem> */}

                    </Nav>
                    <NavbarText>$0.00</NavbarText>{' '}
                    <NavbarText className="px-5"><Button id="connect-button">Connect Wallet</Button></NavbarText>

                </Collapse>
            </Navbar>
        </nav>
    );
};

export default Header;