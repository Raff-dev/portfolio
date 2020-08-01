import React, { Component } from 'react';
import { NextArrow } from './NavMenu'
import { Section } from '../utilities/Section';

export function About({ nextSectionName }) {
    const content =
        <div className="section-content timeline">
            <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
            <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
        </div>

    return (
        <Section
            content={content}
            sectionName='About'
            nextSectionName={nextSectionName}
        />
    );
}
