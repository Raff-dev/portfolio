import React from 'react';
import { Section } from '../utilities/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSitemap, faMobileAlt, faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faReact, faUnity, faJava, faPython, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faAndroid, faJs, faBootstrap } from '@fortawesome/free-brands-svg-icons'

export const Skills = ({ nextSectionName }) => {
    const languages = [faJava, faPython, faJs, faHtml5, faCss3];
    const technologies = [faReact, faBootstrap, faUnity, faAndroid];

    const RuleBox = ({ text, icon }) => {
        return (
            <div className="rule-box">
                <p>{text}</p>
                <div>
                    <FontAwesomeIcon icon={icon} size="4x" color="#fff" />
                </div>
            </div>
        );
    }

    const Icon = ({ src }) => {
        return (
            <div className="icon">
                <img src={src} alt="" />
            </div>
        );
    }

    return (
        <Section sectionName='Skills' nextSectionName={nextSectionName}>
            <div className="section-content skills">
                <div className="workflow">
                    <RuleBox icon={faMobileAlt} text="Responsive Design" />
                    <RuleBox icon={faSitemap} text="Intuitive Architecture" />
                    <RuleBox icon={faPenNib} text="Minimalistic Style" />
                </div>
                <div className="technologies">
                    <div className="subheading">Programming Languages & Tools</div>
                    <div className="languages">
                        {languages.map((icon, index) =>
                            <div className="icon" key={index}>
                                <FontAwesomeIcon icon={icon} size="4x" color="rgb(250,100,0)" />
                            </div>)}
                        <Icon src="images/csharp.png" />
                        <Icon src="images/c.png" />
                        <Icon src="images/slq.png" />
                    </div>
                    <div className="tools">
                        <div className="icon">
                            <img src="images/django.png" alt="" />
                        </div>
                        {technologies.map((icon, index) =>
                            <div className="icon" key={index}>
                                <FontAwesomeIcon icon={icon} size="4x" color="rgb(250,100,0)" />
                            </div>)}
                        <Icon src="images/dotnet.png" />
                    </div>
                </div>
            </div >
        </Section>
    );
}
