import React from 'react';
import { Section } from './Section';

export function TimeLine(props) {
    const content =
        <div className="section-content timeline">
            {props.entries.map((entry, index) => {
                return <div className="entry">
                    <div className="info">
                        <h3 className="title">{entry.title}</h3>
                        {entry.localization && < p className="localization">{entry.localization}</p>}
                        {entry.description && <p className="description">{entry.description}</p>}
                        {entry.content && <p className="content">{entry.content}</p>}
                    </div>
                    <div className="flex-shrink-0"><span className="date">{entry.date}</span></div>
                </div>
            })}
        </div>

    return (
        <Section
            content={content}
            sectionName={props.sectionName}
            nextSectionName={props.nextSectionName} />
    );
};

