import React, { Component } from 'react';
import { NavMenu, TopArrow } from './components/NavMenu';

import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { About } from './components/About';
import { Skills } from './components/Skills';
import './css/App.scss';


export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <div class="p-0">
                <NavMenu />
                <Home />
                <div>
                    <Projects class="pt-2" />
                    <hr class="m-0" />
                    <About />
                    <hr class="m-0" />
                    <Education />
                    <hr class="m-0" />
                    <Skills />
                    <TopArrow />
                </div>
            </div>
        );
    }
}
