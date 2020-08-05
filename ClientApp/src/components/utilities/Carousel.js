import React, { Component } from 'react';
import { CarouselNav } from './CarouselNav';
import { Card } from './Card';

export class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: props.cards,
            activeIndex: 0,
            clickDir: 0,
            modalActive: false,
        }
    };

    select = (dir) => {
        if (dir === 0 & !this.state.modalActive) {
            this.setState({ modalActive: true });
        }
        else if (!this.state.modalActive) {
            const len = this.state.cards.length;
            const nextIndex = (((this.state.activeIndex + dir) % len) + len) % len;
            this.setState({
                activeIndex: nextIndex,
                clickDir: dir,
            });
        }
    }

    render() {
        const cards = this.state.cards;
        const len = cards.length;
        const activeIndex = this.state.activeIndex;

        return (
            <div className="carousel-container">
                <div className="carousel-wrapepr">
                    <div className="carousel">
                        <div className="cards">
                            {cards.map((card, index) => {
                                let offset = (index - activeIndex);
                                if (offset > Math.floor(len / 2)) offset -= len;
                                else if (offset < -Math.floor(len / 2)) offset += len;
                                let dir = offset === 0 ? 0 : offset / Math.abs(offset);
                                let showTransition = Math.abs(offset + this.state.clickDir) <= 2 ? 1 : 0;
                                return <Card
                                    card={card}
                                    offset={offset}
                                    dir={dir}
                                    onClick={this.state.modalActive ? null : this.select}
                                    onClose={() => this.setState({ modalActive: false })}
                                    modalActive={this.state.modalActive}
                                    showTransition={showTransition}
                                />;
                            })}
                        </div>
                    </div>
                </div>
                <CarouselNav
                    modalActive={this.state.modalActive}
                    cards={cards}
                    activeIndex={activeIndex}
                    onClick={this.select} />
            </div >
        );
    }
}