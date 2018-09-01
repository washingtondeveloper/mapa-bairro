import React from 'react';

export default props => (
    <ul>
        {props.items.map((item, i) => <li className={item.show ? 'active' : ''} key={i} onClick={() => props.onMarkerClick(item.id)}>{item.description}</li>)}
    </ul>
)