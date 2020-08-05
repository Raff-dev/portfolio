import React from 'react';
import { Link } from 'react-scroll'
import { SocialIcon } from 'react-social-icons';

export function Card(props) {
    var offset = props.offset;
    const card = props.card;
    const active = offset === 0 ? true : false;
    offset = (props.modalActive && offset !== 0) ? (10 * offset) : offset;

    return Math.abs(offset) > 3
        ? null
        : (<Link
            to={(active && !props.modalActive)
                ? card.title.replace(/ /g, '')
                : null}
            duration={300}
            smooth={true}
            onClick={props.onClick == null ? null : () => props.onClick(props.dir)}
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
            <span className="title-container">
                <h3 className="title" id={card.title.replace(/ /g, '')}>{card.title}</h3>
            </span>
            <div className="image-wrapper" data-modal={props.modalActive}>
                <div
                    data-active={active}
                    data-modal={props.modalActive}
                    className="card-image"
                    style={{
                        backgroundImage: `url('${card.image}')`,
                    }}
                ></div>
            </div>
            {
                props.modalActive && active &&
                <div className="modal-items">
                    <div className="description">
                        {card.description}
                    </div>
                    <div className="modal-buttons">
                        <div className="modal-buttons-wrapper">
                            <div className="social-icons">
                                <SocialIcon url={card.links[0]} bgColor="rgb(255,255,255)" style={{ height: 35, width: 35 }} />
                            </div>
                            {card.links.length > 1 &&
                                <div className="social-icons">
                                    <SocialIcon url={card.links[1]} bgColor="rgb(255,255,255)" style={{ height: 35, width: 35 }} />
                                </div>
                            }
                            <div className="close-button-wrapper">
                                <Link
                                    to={'Projects'}
                                    duration={300}
                                    smooth={true}
                                    className="close-button"
                                    onClick={props.onClose}>
                                    <span>+</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
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