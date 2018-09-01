import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

import MyMap from './containers/map/MyMap';
import MapBtnMeu from './components/mapBtnMenu/MapBtnMeu';
import MapSide from './components/mapSide/MapSide';

import './App.css'

/**
 * @author Washington
 * @class App
 * @description Responsavel em controlar toda a aplicação ('State')
 */
export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.urlGoogle = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=&libraries=geometry,drawing,places";

        this.state = {
            showSide: false,
            query: '',
            markers: [
                { id: 1, title: 'Lava Radio', description: 'R. Maria videira da Costa', lat: -23.526702, lng: -46.383464, show: false },
                { id: 2, title: 'Praca para exercicio, ', description: 'com aparelhos ar livre', lat: -23.527696, lng: -46.384718, show: false },
                { id: 3, title: 'Campo de futebol', description: ' Parque dos Sonhos', lat: -23.526344, lng: -46.385463, show: false },
                { id: 4, title: 'Estacionamento organizado * ', description: 'Esquina Antônio Lourenco dos Santos', lat: -23.528139, lng: -46.382737, show: false },
                { id: 5, title: 'Mercado e Padaria J&F ', description: 'R. Maria videira da Costa', lat: -23.526874, lng: -46.383761, show: false },
            ]
        }

        this.handleMarkerClick = this.handleMarkerClick.bind(this);
        this.updateQuery = this.updateQuery.bind(this);
    }

    /**
     * @description Responsavel adminitrar o click no marker, show ou hide a descrição
     * @param {Integer} id
     */
    handleMarkerClick(id) {
        this.setState(state => {
            return {
                ...state,
                markers: state.markers.map(m => {
                    if (m.id === id) {
                        m.show = !m.show;
                        return m;
                    }
                    return m;
                })
            }
        });
    }

    /**
     * @description Responsavel em mudar a variavel Query do estado
     * @param {String} query 
     */
    updateQuery(query) {
        this.setState({ query: query.trim() });
    }

    /**
     * @method handleToogle
     * @description Responsavel em administrar a visualização do aside
     */
    handleToogle() {
        this.setState({ showSide: !this.state.showSide });
    }

    /**
     * @method Filter
     * @description Responsavel em fazer o filtro dos markers
     */
    filter() {
        let showingMarkers;

        if (this.state.query) {
            const regx = new RegExp(escapeRegExp(this.state.query), 'i');
            showingMarkers = this.state.markers.filter(mark => regx.test(mark.title));
        } else {
            showingMarkers = this.state.markers;
        }

        return showingMarkers;
    }

    render() {

        let showingMarkers = this.filter();

        showingMarkers.sort(sortBy('title'));

        return (
            <div id="mapContainer">

                <MapSide title="Localizações"
                    showSide={this.state.showSide}
                    items={showingMarkers}
                    onMarkerClick={(id) => this.handleMarkerClick(id)}
                    onUpdateQuery={this.updateQuery} />

                <section style={{ height: `100%`, width: `100%` }}>
                    <MapBtnMeu meuClick={() => this.handleToogle()} showSide={this.state.showSide} />

                    <MyMap
                        googleMapURL={this.urlGoogle}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%`, width: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />} >

                        {showingMarkers.map((m, i) => {
                            const { id, show, lat, lng, title, description } = m
                            return (
                                <Marker key={i} position={{ lat, lng }} onClick={() => this.handleMarkerClick(id)}>
                                    {show && <InfoWindow onCloseClick={() => this.handleMarkerClick(id)}>
                                        <div>
                                            <h1>{title}</h1>
                                            <p>{description}</p>
                                        </div>
                                    </InfoWindow>}
                                </Marker>
                            )
                        })}
                    </MyMap>
                </section>
            </div>
        );
    }
}