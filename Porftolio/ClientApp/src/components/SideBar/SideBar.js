import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import {
    Link, Element, Events,
    animateScroll as scroll, scrollSpy, scroller
} from 'react-scroll'

import './SideBarStyles.css'

export class SideBar extends Component {
    displayName = SideBar.name

    render() {
        return (
            <div className="SideBar">
                <div>
                    <Link onClick={() => scroll.scrollToTop()}>About</Link>
                </div>
                <div>
                    <Link onSetActive={() => console.log(this)} spy={true} duration={800} smooth={true} to="Projects">Projects</Link>
                </div>
                <div>
                    <Link duration={800} smooth={true} to="Education">Education</Link>
                </div>
                <div>
                    <Link duration={800} smooth={true} to="Skills">Skills</Link>
                </div>
                <div>
                    <Link duration={800} smooth={true} to="Interests">Interests</Link>
                </div>

            </div>
            //<Navbar inverse fixedTop fluid collapseOnSelect>
            //    <Navbar.Header>
            //        <Navbar.Brand>Porftolio</Navbar.Brand>
            //        <Navbar.Toggle />
            //    </Navbar.Header>
            //    <Navbar.Collapse>
            //        <Nav>
            //            <NavItem>About</NavItem>
            //            <NavItem>Projects</NavItem>
            //            <NavItem>Education</NavItem>
            //            <NavItem>Interests</NavItem>
            //            <NavItem>Skills</NavItem>
            //        </Nav>
            //    </Navbar.Collapse>
            //</Navbar>
        );
    }
}
