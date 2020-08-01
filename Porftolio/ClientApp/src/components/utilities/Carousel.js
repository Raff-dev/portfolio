import React, { Component } from 'react';
import { Link } from 'react-scroll'

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
                                    onClick={this.select}
                                    onClose={() => this.setState({ modalActive: false })}
                                    modalActive={this.state.modalActive}
                                    showTransition={showTransition}
                                />;
                            })}
                        </div>
                    </div>
                </div>
                {!this.state.modalActive &&
                    <CarouselNav
                        cards={cards}
                        activeIndex={activeIndex}
                        onClick={this.select} />
                }
            </div >
        );
    }
}

function Card(props) {
    var offset = props.offset;
    const card = props.card;
    const active = offset === 0 ? true : null;
    offset = (props.modalActive && offset !== 0) ? (10 * offset) : offset;

    return (
        <Link
            to={(active && !props.modalActive)
                ? card.title.replace(/ /g, '')
                : null}
            duration={300}
            onClick={() => props.onClick(props.dir)}
            className="card"
            data-active={active}
            data-modal={props.modalActive}
            style={{
                '--offset': offset,
                '--dir': props.dir,
                '--dirabs': Math.abs(props.dir),
                '--showTransition': props.showTransition,
            }
            }>
            <div
                className="card-image"
                style={{
                    backgroundImage: `url('${card.image}')`,
                }}
            ></div>
            <span className="title-container">
                <h3 className="title" id={card.title.replace(/ /g, '')}>{card.title}</h3>
            </span>
            {
                props.modalActive && active &&
                <Link
                    to={'Projects'}
                    duration={300}
                    className="close-button"
                    onClick={props.onClose}>
                    <span>CLOSE</span>
                </Link>
            }
            {
                !props.modalActive &&
                <div className="click-hint">
                    <p>CLICK ME</p>
                </div>
            }
        </Link >
    );
}

function CarouselNav(props) {
    const cards = props.cards;
    const activeIndex = props.activeIndex;
    const length = props.cards.length;

    return (
        <nav className="carousel-nav">
            {cards.map((card, index) => {
                let offset = Carousel.getOffset(index, activeIndex, length);
                let active = props.activeIndex === index ? true : null;
                let classes = active ? 'dot active' : 'dot';

                return (
                    <div
                        className={classes}
                        onClick={() => props.onClick(offset)}
                        style={{
                            '--count': cards.length,
                        }}>
                    </div>
                );
            })}
        </nav >
    );
}