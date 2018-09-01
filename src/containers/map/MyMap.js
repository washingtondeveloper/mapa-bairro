import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

export default withScriptjs(withGoogleMap((props) => (

    <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: -23.527371, lng: -46.384675 }}>

        {/**React.Children.map(props.children, child => React.cloneElement(child, {...props}) ) **/ props.children}
    </GoogleMap>

)));