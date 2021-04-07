import React from 'react';
import './key.css'
import _ from 'lodash';
import { NOTES_TO_KEAYBOARD } from './global/constants';


class Key extends React.Component {
    isSharp = (note) => {
        return note.length > 2;
    }
    isPressed  = (note, pressed) => {
        return _.includes(pressed, NOTES_TO_KEAYBOARD[note]);
      }
    
    render() {
        let keyClass = "key";
        const isSharp = this.isSharp(this.props.note);
        const isPressed = this.isPressed(this.props.note, this.props.pressed);
        if (isSharp) {
            keyClass += " sharp";
        }
        if (isPressed) {
            keyClass =+ " pressed"
        }
        
        let key;
        if (isSharp) {
            key = (
                <div className={keyClass}></div>
                );
            } else {
                key = (
                    <div className={keyClass}>
                <div className="key-name">
                    {this.props.note.toUpperCase()}
                </div>
                </div>
            );
        }
        return key;
    }
}

export { Key }