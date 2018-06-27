import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import NavigationItems from './NavigationItems/NavigationItems';

const navbar = () => (
    <div>
        <Navbar fixedTop fluid collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand >
                    <Link id='mainPage' to="/">
                            Pagrindinis
                        </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavigationItems/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);

export default navbar;
