import React from 'react';
import { NextArrow } from './Navigation'

export function Section({ sectionName, nextSectionName, children }) {
    return (
        <section className="resume-section" id={sectionName}>
            <div className="next-arrow-wrapper">
                <span className="section-title-container">
                    <h2 className="section-name">{sectionName}</h2>
                </span>
                {children}
            </div>
            < NextArrow id={nextSectionName} />
        </section>
    );
};

