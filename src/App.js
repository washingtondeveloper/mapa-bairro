import React from 'react';

import MyMap from './containers/map/MyMap';
import MapBtnMeu from './components/mapBtnMenu/MapBtnMeu';
import MapSide from './components/mapSide/MapSide';

import './App.css'

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showSide: false
        }
    }

    handleToogle() {
        this.setState({ showSide: !this.state.showSide});
    }

    render() {
        return (
            <div id="mapContainer">
                <MapSide title="Localizações" showSide={this.state.showSide} />

                <section style={ {height:`100%`, width:`100%`}}>
                    <MapBtnMeu meuClick={() => this.handleToogle()} showSide={this.state.showSide}/>

                    <MyMap
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%`, width: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />} />
                </section>
            </div>
        );
    }
}