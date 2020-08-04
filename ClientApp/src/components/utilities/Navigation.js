import React from 'react';
import { Glyphicon } from 'react-bootstrap'
import { Link, animateScroll as scroll } from 'react-scroll'


export function NextArrow(props) {
    return (
        <div className="to-next-arrow">
            <Link to={props.id} duration={800} smooth={true}>
                <Glyphicon glyph="menu-down" />
            </Link>
        </div>
    );
}

export function TopArrow() {
    return (
        <div className="to-top-arrow">
            <div>
                <Link onClick={() => scroll.scrollToTop()} duration={800}>
                    <Glyphicon glyph="circle-arrow-up" />
                </Link>
            </div>
        </div>
    );
}
