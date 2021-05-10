import React from 'react';
import './button.scss';

export default function Button(props) {
    return (
        <button className="generalButton" onClick={props.onClick}>{props.name}</button>
    )
}
