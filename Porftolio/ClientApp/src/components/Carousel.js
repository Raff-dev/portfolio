import React, { Component } from 'react';
import { Card } from './Card';
import '../css/CarouselStyles.scss'

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
        const prevIndex = (((activeIndex + 1) % len) + len) % len;
        const nextIndex = (((activeIndex - 1) % len) + len) % len;

        return (
            <div class="carousel">
                <button onClick={() => { this.setState({ activeIndex: prevIndex }) }}>Previous</button>
                <div class="cards">
                    {cards.map((card, index) => {
                        let curIndex = 1;
                        return <Card card={card} />;
                    })}
                </div>
                <button onClick={() => { this.setState({ activeIndex: nextIndex }) }}>Next</button>
            </div>
        );
    }
}
