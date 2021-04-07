import React from 'react';
import './key.css'

class Key extends React.Component {
    render () {
        return (
            <div className="key">
            <div className="key-name">
            {this.props.note.toUpperCase()}
            </div>
            </div>
        );
    }
}

export {Key}