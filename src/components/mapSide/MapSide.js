import React from 'react';

import MapForm from '../mapForm/MapForm';
import MapList from '../mapList/MapList';

import './MapSide.css';

export default props => (
    <div id="side" className={props.showSide ? 'show' : 'hide'} >
        <div className="side-header">
            <h3>{props.title}</h3>
        </div>
        <div className="side-content">
            <MapForm />
            <MapList items={props.items} onMarkerClick={props.onMarkerClick}/>
        </div>
    </div>
);