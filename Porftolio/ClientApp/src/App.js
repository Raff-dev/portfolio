import React, { Component } from 'react';
import { NavMenu, ScrollArrow } from './components/NavMenu';

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
                <NavMenu />
                <About />
                <div>
                    <Projects class="pt-2" />
                    <hr class="m-0" />
                    <Education />
                    <hr class="m-0" />
                    <Skills />
                    <hr class="m-0" />
                    <Interests />
                    <ScrollArrow />
                </div>
            </div>
        );
    }
}
