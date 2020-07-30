import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap'

import { SideBar } from './components/SideBar';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Interests } from './components/Interests';
import { Skills } from './components/Skills';
import './css/AppStyles.scss';


export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <div class="p-0">
                <About />
                <Projects class="pt-2" />
                <hr class="m-0" />
                <Education />
                <hr class="m-0" />
                <Skills />
                <hr class="m-0" />
                <Interests />
                <SideBar />
            </div>
        );
    }
}