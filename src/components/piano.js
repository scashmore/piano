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

    playKey = (note) => {
        if (!_.isEmpty(note)) {
            const noteAudio = new Audio(document.getElementById(note).src);
            noteAudio.play();
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
        this.playKey(KEYBOARD_TO_NOTES[key]);
    }

    handleKeyUp = (event) => {
        const index = this.state.pressed.indexOf(event.key);
        if (index > 0) {
            this.setState(state => ({
                pressed: state.pressed.splice(index, 1)
            }));
        }
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    render() {
        const keys = _.map(NOTES, (note, index) => {
            return (
                <Key
                    key={index}
                    note={note}
                    pressed={this.state.pressed}
                />
            );
        });
        const audioFiles = _.map(NOTES, (note, index) => {
           return (
            <audio
                id={note}
                key={index}
                src={`../../audio/${note}.mp3`}
            />
           )
        });
        return (
            <div>
                <div className="piano" >
                    {keys}
                </div>
                <div>
                    {audioFiles}
                </div>
            </div>
        );
    }
}

export { Piano };