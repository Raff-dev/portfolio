import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap'
import { Link } from 'react-scroll'
import { SocialIcon } from 'react-social-icons';
import '../css/Home.scss';

export class Home extends Component {
    displayName = Home.name

    render() {
        return (
            <section className="resume-section Home" id="Home">
                <div className="resume-section-content">
                    <h1 className="name mb-0">
                        My name is Rafal<span class="surname"> Lazicki.</span>
                    </h1>
                    <span>
                        <p className="description mb-5">I'am a 3rd year computer science student.</p>
                    </span>
                    <div className="info mb-5">
                        <p>Batalionu AK "Parasol" 10/24,</p>
                        <p> Warsaw, </p>
                        <p> +48 504 854 839, </p>
                        <a href="mailto:rafal.lazicki99@gmail.com"> rafal.lazicki99@gmail.com</a>
                    </div>
                    <div className="social-icons">
                        <SocialIcon url="https://www.linkedin.com/in/rlazicki/" />
                        <SocialIcon url="https://www.facebook.com/RaffUsername/" />
                        <SocialIcon url="https://github.com/Raff-dev" />
                    </div>
                    <div className="arrow">
                        <Link to="Projects" duration={800} smooth={true}>
                            <Glyphicon glyph="menu-down" />
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}
