import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

import MyMap from './components/map/MyMap';
import MapBtnMeu from './components/mapBtnMenu/MapBtnMeu';
import MapSide from './components/mapSide/MapSide';
import Icon from './img/fechado.svg';

import * as apiMakers from './service/ApiMarkers';
import { apiGoogle } from './config/config';

import './App.css'

/**
 * @author Washington
 * @class App
 * @description Responsavel em controlar toda a aplicação ('State')
 */
export default class App extends React.Component {

    urlGoogle = apiGoogle;

    state = {
        showSide: false,
        query: '',
        markers: [],
        mapError: false
    }

    /**
     * @description Responsavel adminitrar o click no marker, show ou hide a descrição
     * @param {Integer} id
     */
    handleMarkerClick = id => {
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

    componentDidMount = () => {

        window.gm_authFailure = () => {
            this.setState({ mapError: true });
        }

        apiMakers.getAll()
            .then(markers => this.setState({ markers }))
            .catch(error => {
                alert('Tivemos um problema ao carregar as Marcações :-(');
                console.error(error);
            });

    }

    /**
     * @description Responsavel em mudar a variavel Query do estado
     * @param {String} query 
     */
    updateQuery = query => {
        this.setState({ query: query.trim() });
    }

    /**
     * @method handleToogle
     * @description Responsavel em administrar a visualização do aside
     */
    handleToogle = () => {
        this.setState({ showSide: !this.state.showSide });
    }

    /**
     * @method Filter
     * @description Responsavel em fazer o filtro dos markers
     */
    filter = () => {
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

                    {!this.state.mapError &&
                        <MyMap
                            googleMapURL={this.urlGoogle}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `100%`, width: `100%` }} />}
                            mapElement={<div style={{ height: `100%` }} />} >

                            {showingMarkers.map((m, i) => {
                                const { id, show, lat, lng, title, description } = m
                                return (
                                    <Marker key={i} position={{ lat, lng }} icon={show ? { url: Icon } : null} onClick={() => this.handleMarkerClick(id)}>
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
                    }
                    {this.state.mapError &&
                        <h2 id="error">Erro ao Carregar o Mapa</h2>
                    }
                </section>
            </div>


        );
    }
}