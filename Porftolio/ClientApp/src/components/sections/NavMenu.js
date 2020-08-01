import React from 'react';
import { Nav, Navbar, NavItem, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-scroll'

export function NavMenu({ sections }) {
    return (
        <Navbar bg-transparent inverse fluid collapseOnSelect>
            <Navbar.Header>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    {sections.map((sectionName, index) => {
                        return <NavItem>
                            <Link
                                className={sectionName + '-link'}
                                duration={800 + index * 100}
                                smooth={true}
                                to={sectionName}
                            >
                                {sectionName}
                            </Link>
                        </NavItem>
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

