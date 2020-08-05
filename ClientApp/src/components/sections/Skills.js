import React from 'react';
import { Section } from '../utilities/Section';

export function Skills(props) {

    const technologies = ['react', 'node.js', 'django', 'unity', 'git', 'bash'];
    const languages = ['java', 'python', 'javascript', 'SQL', 'c#', 'c', 'html', 'css', 'sass']

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
                <li className="list-inline-item"><i className="fab fa-npm"></i></li>
            </ul>
            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
                <li>
                    <span className="fa-li">
                        Mobile-First, Responsive Design</span>
                </li>
                <li>
                    <span className="fa-li">Simpler means better</span>
                </li>
                <li>
                    <span className="fa-li">Cross Functional Teams</span>
                </li>
                <li>

                    <span className="fa-li">Agile Development & Scrum</span>
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
