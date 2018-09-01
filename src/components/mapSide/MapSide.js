import React from 'react';

import MapForm from '../mapForm/MapForm';
import MapList from '../mapList/MapList';

import './MapSide.css';

export default ({ showSide, title, items, onMarkerClick, onUpdateQuery }) => (
    <div id="side" className={showSide ? 'show' : 'hide'} >
        <div className="side-header">
            <h3>{title}</h3>
        </div>
        <div className="side-content">
            <MapForm updateQuery={onUpdateQuery}/>
            <MapList items={items} onMarkerClick={onMarkerClick}/>
        </div>
    </div>
);