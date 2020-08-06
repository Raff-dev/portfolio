import React from 'react';

export function getOffset(index, activeIndex, length) {
    let offset = (index - activeIndex);
    if (offset > Math.floor(length / 2)) offset -= length;
    else if (offset < -Math.floor(length / 2)) offset += length;
    return offset;
}

export function CarouselNav(props) {
    const cards = props.cards;
    const activeIndex = props.activeIndex;
    const length = props.cards.length;

    return (
        <nav className="carousel-nav" data-modal={props.modalActive}>
            {cards.map((card, index) => {
                let offset = getOffset(index, activeIndex, length);
                let active = props.activeIndex === index ? true : null;
                let classes = active ? 'dot active' : 'dot';

                return (
                    <div
                        data-modal={props.modalActive}
                        className={classes}
                        onClick={() => props.onClick(offset)}
                        style={{
                            '--count': cards.length,
                            '--index': index,
                        }}>
                    </div>
                );
            })}
        </nav >
    );
}
