import React, { Component } from 'react';

export function Card(props) {

    return (
        <div className="project-card">
            <p>{props.project.title}</p>
            <p>{props.project.description}</p>
            {props.project.images.map(imageName =>
                <img src={imageName} alt="Preview image"></img>
            )}
        </div>);
}
