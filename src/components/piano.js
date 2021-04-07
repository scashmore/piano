import React from 'react';
import { Key } from './key.js';
import './piano.css';
import _ from 'lodash';
import { NOTES } from './global/constants.js'
import { KEYS } from './global/constants.js'
import { KEYBOARD_TO_NOTES } from './global/constants.js'

class Piano extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: []
        }
    }

    handleKeyDown = (event) => {
        if (event.repeat) {
          return;
        }
        const key = event.key;
        const updatedPressed = [...this.state.pressed];
        if (!updatedPressed.includes(key) && KEYS.includes(key)) {
          updatedPressed.push(key);
        }
        this.setState({
          pressed: updatedPressed,
        });
        this.playNote(KEYBOARD_TO_NOTES[key]);
      }
    
      handleKeyUp = (event) => {
        const index = this.state.pressed.indexOf(event.key);
        if (index > -1) {
          this.setState(state => ({
            pressedKeys: state.pressed.splice(index, 1)
          }));
        }
      }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    render() {
        const keys = _.map(NOTES, (notes, index) => {
            return (
                <Key
                    key={index}
                    note={notes}
                    pressed={this.state.pressed}
                />
            );
        });
        return (
            <div className="piano" >
                {keys}
            </div>
        );
    }
}

export { Piano };