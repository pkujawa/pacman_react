import React, {Component} from 'react';

import './style.css';
import {ReactComponent as GhostSvg } from './ghost.svg';
class Ghost extends Component {

    state = {
        direction: 'left',
        position: {
            top: 50 * 3,
            left: 50 * 3
        }
    }
    render() {
        const { color } = this.props
        return (
            <div style={this.state.position} className="ghost">
                <GhostSvg className ={`ghost-${color}`} />
            </div>
        )
    }
}

Ghost.defaultProps = {
    color: 'blue',
    step: 50, // 50px
    size: 50, // ghost size: 50x50px
    border: 10 * 2,
    topScoreBoardHeight: 50, 
}
export default Ghost;