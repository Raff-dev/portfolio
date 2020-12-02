import React from 'react';
import { Section } from '../utilities/Section';

export const About = ({ nextSectionName }) => {
    const info = {
        photo: 'images/photo.jpg',
        paragraphs: ["Apart from studying and programming, I am definitely a sport loving person. My main passion is powerlifting, which started in 2015 as a casual gym visit, and developed into national level competitive journey.",
            "I enjoy spending my spare time biking or discovering  new types of craft beer along with my friends, and personally, I can't imagine a better day start, but a one, that begins with a cup of black coffee accompanied by a sci-fi novel."],
    }

    return (
        <Section sectionName='About' nextSectionName={nextSectionName}>
            <div className="section-content about">
                <div className="photo-container">
                    <div className="photo-frame">
                        <img className="photo" src={info.photo} alt=""></img>
                    </div>
                </div>
                <div className="bio-container">
                    {info.paragraphs.map((paragraph, index) => <p className="bio" key={index}>{paragraph}</p>)}
                </div>
            </div>
        </Section>
    );
}