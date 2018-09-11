import React from 'react';
import './MapList.css';
/**
 * @description Responsavel em Listar os locais do map
 * @method MapList
 * @author Washington
 */
export default props => (
    <div id="list">
        {props.items.map((item, i) => <button className={item.show ? 'active' : ''} key={i} onClick={() => props.onMarkerClick(item.id)}>{item.title}</button>)}
    </div>
)