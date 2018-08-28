import React from 'react';
import './MapBtnMenu.css';
/**
 * @description Responsavel em manipular o menu lateral.
 * @name MapBtnMenu
 * @author Washington
 */
export default props => (
    <button id="btn-menu" onClick={props.meuClick} className={props.showSide ? 'left' : 'right'}>
        <div className="btn-menu-content" >
            <span></span>
            <span></span>
            <span></span>
        </div>
    </button>
);