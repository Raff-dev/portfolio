import React, { Component } from 'react';
export function Card(props) {

    return (
        <div className="card">
            <span>
                <h3>{props.card.title}</h3>
                <p>{props.card.description}</p>
            </span>
        </div>
    );
}
