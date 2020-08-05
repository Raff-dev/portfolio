import React from 'react';
import { Glyphicon } from 'react-bootstrap'
import { Link, animateScroll as scroll } from 'react-scroll'


export function NextArrow(props) {
    const glyph = props.id ? 'menu-down' : 'menu-up'
    return (
        <div className="to-next-arrow">
            <Link
                onClick={props.id ? null : () => scroll.scrollToTop()}
                to={props.id}
                duration={800}
                smooth={true}
            >
                <Glyphicon glyph={glyph} />
            </Link>
        </div>
    );
}

export class TopArrow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 1,
        }
    }
    componentDidMount() {
        window.onscroll = () => {
            if (window.pageYOffset !== 0) {
                this.setState({ opacity: 1 });
            } else {
                this.setState({ opacity: 0 });
            }
        };
    }
    componentWillUnmount() {
        window.onscroll = null;
    }

    render() {
        return (
            <div className="to-top-arrow" >
                <div>
                    <Link
                        onClick={() => scroll.scrollToTop()}
                        duration={800}
                        style={{
                            opacity: this.state.opacity,
                        }}>
                        <Glyphicon glyph="circle-arrow-up" />
                    </Link>
                </div>
            </div>
        );
    }
}
