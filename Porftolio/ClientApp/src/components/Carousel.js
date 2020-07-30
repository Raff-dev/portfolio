import React, { Component } from 'react';
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
        const prevIndex = (((activeIndex - 1) % len) + len) % len;
        const nextIndex = (((activeIndex + 1) % len) + len) % len;

        return (
            <div className="carousel-container">
                <button class="a" onClick={() => { this.setState({ activeIndex: prevIndex }) }}>Previous</button>
                <button class="b" onClick={() => { this.setState({ activeIndex: nextIndex }) }}>Next</button>
                <div class="carousel">
                    <div class="cards">
                        {cards.map((card, i) => {
                            let offset = (i - activeIndex);
                            if (offset > Math.floor(len / 2)) offset -= len;
                            else if (offset < -Math.floor(len / 2)) offset += len;
                            let dir = offset == 0 ? 0 : offset / Math.abs(offset);
                            let showTransition = ((offset * dir + 1) < (len / 2)) ? 1 : 0;

                            return <Card
                                card={card}
                                offset={offset}
                                dir={dir}
                                showTransition={showTransition}
                            />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}


function Card(props) {
    const card = props.card;
    const offset = props.offset;
    const active = offset == 0 ? true : null;
    return (
        <div
            className="card"
            data-active={active}
            style={{
                '--offset': props.offset,
                '--dir': props.dir,
                '--showTransition': props.showTransition,
                backgroundImage: `url('${card.image}')`,
                opacity: 1 - 0.15 * Math.abs(props.offset)
            }}>
            <span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
            </span>
        </div >
    );
}