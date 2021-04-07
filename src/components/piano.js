import React from 'react';
import {Key} from './key.js';
import './piano.css';

class Piano extends React.Component {
    render() {
        return (
            <div className="piano">
                <Key />
                <Key />
                <Key />
            </div>
        );
    }
}

export { Piano };