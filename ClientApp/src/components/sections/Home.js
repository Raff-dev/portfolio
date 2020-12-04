import React from 'react';

import { SocialIcon } from 'react-social-icons';
import { NextArrow } from '../utilities/Navigation'

export const Home = ({ nextSectionName }) => {
    return (
        <section className="resume-section Home" id="Home">
            <div className="section-content">
                <p className="name mb-0">
                    My name is Rafał<span className="surname">Łazicki.</span>
                </p>
                <span>
                    <p className="description mb-5">I'am a 3rd year computer science student.</p>
                </span>
                <div className="info mb-5">
                    <a href="mailto:rafal.lazicki99@gmail.com">rafal.lazicki99@gmail.com</a>
                    <p>+48 504 854 839</p>
                </div>
                <div className="social-icons">
                    <SocialIcon url="https://www.linkedin.com/in/rlazicki/" bgColor="rgb(0, 127, 177)" />
                    <SocialIcon url="https://www.facebook.com/RaffUsername/" bgColor="rgb(0, 127, 177)" />
                    <SocialIcon url="https://github.com/Raff-dev/" bgColor="rgb(0, 127, 177)" />
                </div>
            </div>
            <NextArrow id={nextSectionName} />
        </section>
    );
}
