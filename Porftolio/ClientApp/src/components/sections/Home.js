import React, { Component } from 'react';

import { SocialIcon } from 'react-social-icons';
import { NextArrow } from '../utilities/Navigation'

export class Home extends Component {
    displayName = Home.name

    render() {
        return (
            <section className="resume-section Home" id="Home">
                <div className="section-content">
                    <h1 className="name mb-0">
                        My name is Rafal<span className="surname"> Lazicki.</span>
                    </h1>
                    <span>
                        <p className="description mb-5">I'am a 3rd year computer science student.</p>
                    </span>
                    <div className="info mb-5">
                        <a href="mailto:rafal.lazicki99@gmail.com">rafal.lazicki99@gmail.com</a>
                        <p>+48 504 854 839</p>
                    </div>
                    <div className="social-icons">
                        <SocialIcon url="https://www.linkedin.com/in/rlazicki/" />
                        <SocialIcon url="https://www.facebook.com/RaffUsername/" />
                        <SocialIcon url="https://github.com/Raff-dev" />
                    </div>
                </div>
                <NextArrow id="Projects" />
            </section>
        );
    }
}
