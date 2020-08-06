import React from 'react';
import { Section } from '../utilities/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSitemap, faMobileAlt, faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faReact, faUnity, faAndroid } from '@fortawesome/free-brands-svg-icons'
import { faJava, faPython, faJs, faBootstrap } from '@fortawesome/free-brands-svg-icons'

export function Skills(props) {
    const technologies = [faReact, faBootstrap, faUnity, faAndroid];
    const languages = [faJava, faPython, faJs];
    const content =
        <div className="section-content skills">
            <div className="workflow">
                <div className="rule-box">
                    <p>Responsive Design</p>
                    <div>
                        <FontAwesomeIcon icon={faMobileAlt} size="4x" color="#fff" />
                    </div>
                </div>
                <div className="rule-box">
                    <p>Intuitive Architecture</p>
                    <div>
                        <FontAwesomeIcon icon={faSitemap} size="4x" color="#fff" />
                    </div>
                </div>
                <div className="rule-box">
                    <p>Minimalistic Style</p>
                    <div>
                        <FontAwesomeIcon icon={faPenNib} size="4x" color="#fff" />
                    </div>
                </div>
            </div>
            <div className="technologies">
                <div className="subheading">Programming Languages & Tools</div>
                <div className="languages">

                    {languages.map((icon, index) => {
                        return <div className="icon">
                            <FontAwesomeIcon icon={icon} size="4x" color="rgb(250,100,0)" />
                        </div>
                    })}
                    <div className="icon">
                        <img src="images/csharp.png" alt="" />
                    </div>
                    <div className="icon">
                        <img src="images/c.png" alt="" />
                    </div>
                    <div className="icon">
                        <img src="images/sql.png" alt="" />
                    </div>
                </div>
                <div className="tools">
                    <div className="icon">
                        <img src="images/django.png" alt="" />
                    </div>
                    {technologies.map((icon, index) => {
                        return <div className="icon">
                            <FontAwesomeIcon icon={icon} size="4x" color="rgb(250,100,0)" />
                        </div>
                    })}
                </div>
            </div>
        </div >

    return (
        <Section
            content={content}
            sectionName='Skills'
            nextSectionName={props.nextSectionName}
        />
    );
}
