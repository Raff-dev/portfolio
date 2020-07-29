import React, { Component } from 'react';
import { Card } from './Card';
import '../css/CarouselStyles.css'

export class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: props.cards,
            activeIndex: 0,
        }
    };

    render() {
        const cards = this.state.cards;
        const len = cards.length;
        const activeIndex = this.state.activeIndex;
        const prevIndex = (((activeIndex - 1) % len) + len) % len;
        const nextIndex = (((activeIndex + 1) % len) + len) % len;

        console.log(cards.length + " " + prevIndex + " blep:" + nextIndex)

        return (
            <div class="carousel">
                <button onClick={() => { this.setState({ activeIndex: prevIndex }) }}>Previous</button>
                <div class="cards">
                    <Card card={cards[prevIndex]} />
                    <Card card={cards[activeIndex]} />
                    <Card card={cards[nextIndex]} />
                </div>
                <button onClick={() => { this.setState({ activeIndex: nextIndex }) }}>Next</button>
            </div>
        );
    }
}
