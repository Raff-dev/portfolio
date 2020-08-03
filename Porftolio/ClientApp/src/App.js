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
import './css/About.scss';
import './css/NavMenu.scss';
import './css/Section.scss';
import './css/TimeLine.scss';


export default class App extends Component {
    displayName = App.name

    constructor(props) {
        super(props);
        this.state = {
            sections: [
                'Home', 'About', 'Skills', 'Education', 'Experience', 'Projects']
        }
    }

    getNextSection = section => {
        const sections = this.state.sections
        for (let i in sections) {
            console.log(i)
            if (sections[i] === section && i < sections.length)
                return sections[i + 1];
        }
        return null;
    }

    render() {
        const sections = this.state.sections;
        return (
            <div class="p-0">
                <NavMenu sections={this.state.sections} />
                <Home />
                <div>
                    <Projects nextSectionName={sections[1]} />
                    <hr class="m-0" />
                    <About nextSectionName={sections[2]} />
                    <hr class="m-0" />
                    <Skills nextSectionName={sections[3]} />
                    <hr class="m-0" />
                    <Education nextSectionName={sections[4]} />
                    <hr class="m-0" />
                    <Experience nextSectionName={null} />
                    <TopArrow />
                </div>
            </div>
        );
    }
}
