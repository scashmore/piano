import React from 'react';
import './key.css'


class Key extends React.Component {
    isSharp                                                                                                                                                          = (note) => {
        return note.length > 1;
      }
    render() {
        let keyClass = "key";
        const isSharp = this.isSharp(this.props.note);
        if (isSharp) {
            keyClass += " sharp";
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