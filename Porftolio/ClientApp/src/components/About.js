import React, { Component } from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-scroll'
import { SocialIcon } from 'react-social-icons';

export class About extends Component {
    displayName = About.name

    render() {
        return (
            <section class="resume-section about" id="about">
                <meta charset="utf-8" />
                <div class="resume-section-content">
                    <h1 class="mb-0">
                        I'm Rafal
                        <span class="surname"> Lazicki.</span>
                    </h1>
                    <span>
                        <p class="description mb-5">My description goes here.</p>
                    </span>
                    <div class="info mb-5">
                        <p>
                            Batalionu AK "Parasol" 10/24   Warsaw   +48 504 854 839
                        <a href="mailto:rafal.lazicki99@gmail.com"> rafal.lazicki99@gmail.com</a>
                        </p>
                    </div>
                    <div class="social-icons">
                        <SocialIcon url="https://www.linkedin.com/in/rlazicki/" />
                        <SocialIcon url="https://www.facebook.com/RaffUsername/" />
                        <SocialIcon url="https://github.com/Raff-dev" />
                    </div>
                    <div class="container=fluid arrow">
                        <Link to="Projects" duration={500} smooth={true}>
                            <Glyphicon glyph="menu-down" />
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}
