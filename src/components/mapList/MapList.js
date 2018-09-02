import React from 'react';
import './MapList.css';
/**
 * @description Responsavel em Listar os locais do map
 * @method MapList
 * @author Washington
 */
export default props => (
    <ul>
        {props.items.map((item, i) => <li className={item.show ? 'active' : ''} key={i} onClick={() => props.onMarkerClick(item.id)}>{item.title}</li>)}
    </ul>
)