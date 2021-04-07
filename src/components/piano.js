import React from 'react';
import { Key } from './key.js';
import './piano.css';
import _ from 'lodash';
import {NOTES} from './global/constants.js'

class Piano extends React.Component {
    render() {
        const keys = _.map(NOTES, (notes, index) => {
            return (
                <Key
                    key={index}
                    note={notes}
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