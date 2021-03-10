import React from 'react';
import './tab.scss';

export const Tab = (props) => {
    return (
        <div className="tab" onClick={() => props.onClick(props.index)}>
            {props.children}
        </div>
    )
}