import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap'

import { SideBar } from './components/SideBar/SideBar';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Interests } from './components/Interests';
import { Skills } from './components/Skills';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <div fluid="true" className="App" >
                <SideBar />
                <About />
                <Projects />
                <Education />
                <Skills />
                <Interests />
            </div >
        );
    }
}