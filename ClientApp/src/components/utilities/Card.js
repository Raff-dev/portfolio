import React, { useState } from 'react';
import { Link } from 'react-scroll'
import { SocialIcon } from 'react-social-icons';
import { Glyphicon } from 'react-bootstrap'
import { getOffset } from './CarouselNav'

export function Card(props) {
    var cardOffset = props.offset;
    const card = props.card;
    const active = cardOffset === 0 ? true : false;
    const [imageIndex, setImageIndex] = useState(0);
    const [imageDir, setImageDir] = useState(0);
    cardOffset = (props.modalActive && cardOffset !== 0) ? (10 * cardOffset) : cardOffset;

    const clickHint =
        <div className="click-hint">
            <p>CLICK ME</p>
        </div>;

    const modalComponent =
        <div className="modal-items">
            <div className="description">
                {card.description}
            </div>
            <div className="modal-buttons">
                <div className="modal-buttons-wrapper">
                    {card.links.map((link, index) =>
                        <div className="social-icons" key={index}>
                            <SocialIcon
                                onClick={e => e.stopPropagation()}
                                url={link}
                                bgColor="rgb(255,255,255)"
                                style={{ height: 35, width: 35 }} />
                        </div>)}

                    <div className="close-button-wrapper">
                        <Link
                            to={'Projects'}
                            duration={300}
                            smooth={true}
                            className="close-button"
                            onClick={() => {
                                props.onClose();
                                setImageIndex(0);
                            }}>
                            <span>+</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>;

    const imageComponent =
        <div className="image-wrapper" data-modal={props.modalActive}>
            <div className="modal-carousel-arrows">
                {props.modalActive && card.images.length > 1 &&
                    [-1, 1].map((dir, index) => {
                        const disabled = ((imageIndex + dir) < 0 || (imageIndex + dir) >= card.images.length) ? true : false;
                        return <div
                            className="modal-carousel-arrow"
                            data-dir={dir.toString()}
                            data-disabled={disabled}
                        >
                            <Glyphicon glyph={dir == 1 ? 'menu-right' : 'menu-left'}
                                onClick={() => {
                                    if (disabled) return;
                                    setImageIndex((imageIndex + dir + card.images.length) % card.images.length);
                                    setImageDir(dir);
                                }} />
                        </div>
                    })}
            </div>
            {card.images.map((image, index) => {
                const imageOffset = getOffset(index, imageIndex, card.images.length)
                return (props.modalActive || index == 0) &&
                    <div key={index}
                        data-active={active}
                        data-modal={props.modalActive}
                        className="card-image"
                        style={{
                            backgroundImage: `url('${image}')`,
                            '--image-offset': imageOffset,
                            '--show-tansition': Math.abs(imageOffset + imageDir) < 2 ? 1 : 0
                        }} />
            })}
        </div>;

    return (
        Math.abs(cardOffset) > 3
            ? null
            : <Link
                to={(active && !props.modalActive) ? card.title.replace(/ /g, '') : ''}
                duration={300}
                smooth={true}
                onClick={(e) => props.onClick(props.dir)}
                className="card"
                data-active={active}
                data-modal={props.modalActive}
                style={{
                    '--card-offset': cardOffset,
                    '--dir': props.dir,
                    '--dirabs': Math.abs(props.dir),
                    '--showTransition': props.showTransition,
                }}>
                <span className="title-container">
                    <h3 className="title" id={card.title.replace(/ /g, '')}>{card.title}</h3>
                </span>
                {imageComponent}
                {props.modalActive && active ? modalComponent : clickHint}
            </Link >
    );
}