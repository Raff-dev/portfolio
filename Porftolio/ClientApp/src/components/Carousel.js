import React, { Component } from 'react';

import '../css/Carousel.scss'

export class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: props.cards,
            activeIndex: 0,
        }
    };

    setIndex = (index) => {
        this.setState({ activeIndex: index });
    }

    render() {
        const cards = this.state.cards;
        const len = cards.length;
        const activeIndex = this.state.activeIndex;
        const prevIndex = (((activeIndex - 1) % len) + len) % len;
        const nextIndex = (((activeIndex + 1) % len) + len) % len;

        return (
            <div className="carousel-container">
                <button class="previous" onClick={() => this.setIndex(prevIndex)}>Previous</button>
                <button class="next" onClick={() => this.setIndex(nextIndex)}>Next</button>
                <div className="carousel-wrapepr">
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
                <CarouselNav
                    cards={cards}
                    activeIndex={activeIndex}
                    onClick={this.setIndex} />
            </div >
        );
    }
}


function Card(props) {
    const card = props.card;
    const offset = props.offset;
    const active = offset == 0 ? true : null;

    let classes = active ? 'card active' : 'card'
    return (
        <div
            className={classes}
            data-active={active}
            style={{
                '--offset': offset,
                '--dir': props.dir,
                '--dirabs': Math.abs(props.dir),
                '--showTransition': props.showTransition,
                backgroundImage: `url('${card.image}')`,
                //opacity: 1 - 0.15 * Math.abs(props.offset)
            }}>
            <span>
                <h3 className="title">{card.title}</h3>
                <p className="description">{card.description}</p>
            </span>
        </div >
    );
}

function CarouselNav(props) {
    const cards = props.cards;

    return (
        <nav class="carousel-nav">
            {cards.map((card, index) => {
                let active = props.activeIndex == index ? true : null;
                let classes = active ? 'dot active' : 'dot';
                console.log(index + ' | ' + active + ' | ' + props.activeIndex)

                return (
                    <div
                        className={classes}
                        onClick={() => props.onClick(index)}
                        konia-active={active}
                        style={{
                            '--count': cards.length,
                        }}>
                    </div>
                );
            })}
        </nav >

    );
}