import React from 'react';
import './MapList.css';

export default props => (
    <ul>
        {props.items.map((item, i) => <li className={item.show ? 'active' : ''} key={i} onClick={() => props.onMarkerClick(item.id)}>{item.title}</li>)}
    </ul>
)