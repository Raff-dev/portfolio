import React, { Component } from 'react';

import { NavMenu } from './components/sections/NavMenu';
import { Home } from './components/sections/Home';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { TopArrow } from './components/utilities/Navigation';
import './css/App.scss';
import './css/Carousel.scss';
import './css/Home.scss';
import './css/NavMenu.scss';
import './css/Section.scss';
import './css/TimeLine.scss';


export default class App extends Component {
    displayName = App.name

    constructor(props) {
        super(props);
        this.state = {
            sections: [
                'Home', 'Projects', 'Education', 'Experience', 'Skills', 'About']
        }
    }

    render() {
        return (
            <div class="p-0">
                <NavMenu sections={this.state.sections} />
                <Home />
                <div>
                    <Projects nextSectionName="Education" />
                    <hr class="m-0" />
                    <Education nextSectionName="Experience" />
                    <hr class="m-0" />
                    <Experience nextSectionName="Skills" />
                    <hr class="m-0" />
                    <Skills nextSectionName="About" />
                    <hr class="m-0" />
                    <About nextSectionName={null} />
                    <TopArrow />
                </div>
            </div>
        );
    }
}
