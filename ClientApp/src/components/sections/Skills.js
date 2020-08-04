import React from 'react';
import { Section } from '../utilities/Section';

export function Skills(props) {
    const content =
        <div className="section-content skills">

            <div className="subheading mb-3">Programming Languages & Tools</div>
            <ul className="list-inline dev-icons">
                <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                <li className="list-inline-item"><i className="fab fa-angular"></i></li>
                <li className="list-inline-item"><i className="fab fa-react"></i></li>
                <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                <li className="list-inline-item"><i className="fab fa-sass"></i></li>
                <li className="list-inline-item"><i className="fab fa-less"></i></li>
                <li className="list-inline-item"><i className="fab fa-wordpress"></i></li>
                <li className="list-inline-item"><i className="fab fa-gulp"></i></li>
                <li className="list-inline-item"><i className="fab fa-grunt"></i></li>
                <li className="list-inline-item"><i className="fab fa-npm"></i></li>
            </ul>
            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
                <li>
                    <span className="fa-li"><i className="fas fa-check"></i></span>
                            Mobile-First, Responsive Design
                                </li>
                <li>
                    <span className="fa-li"><i className="fas fa-check"></i></span>
                            Cross Browser Testing & Debugging
                              </li>
                <li>
                    <span className="fa-li"><i className="fas fa-check"></i></span>
                            Cross Functional Teams
                               </li>
                <li>
                    <span className="fa-li"><i className="fas fa-check"></i></span>
                            Agile Development & Scrum
                                </li>
            </ul>
        </div>

    return (
        <Section
            content={content}
            sectionName='Skills'
            nextSectionName={props.nextSectionName}
        />
    );
}
