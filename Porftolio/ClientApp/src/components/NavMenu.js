import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Glyphicon } from 'react-bootstrap';
import {
    Link, animateScroll as scroll
} from 'react-scroll'

import '../css/NavMenuStyles.scss'

export class NavMenu extends Component {
    displayName = NavMenu.name

    render() {
        return (
            <Navbar bg-transparent inverse fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem>
                            <Link onClick={() => scroll.scrollToTop()}>About</Link>
                        </NavItem>
                        <NavItem>
                            <Link onSetActive={() => console.log(this)} spy={true} duration={800} smooth={true} to="Projects">Projects</Link>
                        </NavItem>
                        <NavItem>
                            <Link duration={1000} smooth={true} to="Education">Education</Link>
                        </NavItem>
                        <NavItem>
                            <Link duration={1200} smooth={true} to="Skills">Skills</Link>
                        </NavItem>
                        <NavItem>
                            <Link duration={1200} smooth={true} to="Interests">Interests</Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}


export function ScrollArrow(props) {
    return (
        <div className="scroll-arrow">
            <Link onClick={() => scroll.scrollToTop()} duration={800}>
                <Glyphicon glyph="circle-arrow-up" />
            </Link>
        </div>
    );
}