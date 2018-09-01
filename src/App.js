import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

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
            markers: [
                { id: 1, title: 'Lava Radio', description: 'R. Maria videira da Costa', lat: -23.526702, lng: -46.383464, show: false },
                { id: 2, title: 'Praca para exercicio, ', description: 'com aparelhos ar livre', lat: -23.527696, lng: -46.384718, show: false  },
                { id: 3, title: 'Campo de futebol', description: ' Parque dos Sonhos', lat: -23.526344, lng: -46.385463, show: false  },
                { id: 4, title: 'Estacionamento organizado * ', description: 'Esquina Antônio Lourenco dos Santos', lat: -23.528139, lng: -46.382737, show: false  },
                { id: 5, title: 'Mercado e Padaria J&F ', description: 'R. Maria videira da Costa', lat: -23.526874, lng: -46.383761, show: false },
            ]
        }

        this.handleMarkerClick = this.handleMarkerClick.bind(this);
    }

    handleMarkerClick(id) {        
        this.setState(state => {
            return {
                ...state,
                markers: state.markers.map(m => {
                    if(m.id === id) {
                        m.show = !m.show;
                        return m;
                    }
                    return m;
                })
            }
        });
    }

    handleToogle() {
        this.setState({ showSide: !this.state.showSide });
    }

    render() {
        return (
            <div id="mapContainer">
                <MapSide title="Localizações" showSide={this.state.showSide} items={this.state.markers} onMarkerClick={(id) => this.handleMarkerClick(id)}/>

                <section style={{ height: `100%`, width: `100%` }}>
                    <MapBtnMeu meuClick={() => this.handleToogle()} showSide={this.state.showSide} />

                    <MyMap
                        googleMapURL={this.urlGoogle}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%`, width: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />} >

                        {this.state.markers.map((m, i) => {
                            const { id, show, lat, lng, title, description } = m
                            return (
                                <Marker key={i} position={{lat, lng}} onClick={() => this.handleMarkerClick(id)}>
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