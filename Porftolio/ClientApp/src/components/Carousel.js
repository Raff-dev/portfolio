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

    rotate = (dir) => {
        const len = this.state.cards.length;
        const nextIndex = (((this.state.activeIndex + dir) % len) + len) % len;
        this.setState({ activeIndex: nextIndex });
    }

    static getOffset(index, activeIndex, length) {
        let offset = (index - activeIndex);
        if (offset > Math.floor(length / 2)) offset -= length;
        else if (offset < -Math.floor(length / 2)) offset += length;
        return offset;
    }

    render() {
        const cards = this.state.cards;
        const len = cards.length;
        const activeIndex = this.state.activeIndex;

        return (
            <div className="carousel-container">
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
                                    onClick={this.rotate}
                                    showTransition={showTransition}
                                />;
                            })}
                        </div>
                    </div>
                </div>
                <CarouselNav
                    cards={cards}
                    activeIndex={activeIndex}
                    onClick={this.rotate} />
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
            onClick={() => props.onClick(props.dir)}
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
    const activeIndex = props.activeIndex;
    const length = props.cards.length;

    return (
        <nav class="carousel-nav">
            {cards.map((card, index) => {
                let offset = Carousel.getOffset(index, activeIndex, length);
                let active = props.activeIndex == index ? true : null;
                let classes = active ? 'dot active' : 'dot';
                console.log(index + ' | ' + active + ' | ' + activeIndex)

                return (
                    <div
                        className={classes}
                        onClick={() => props.onClick(offset)}
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