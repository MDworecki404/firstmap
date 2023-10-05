import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import esriConfig from '@arcgis/core/config'
import './map.css'
import React from 'react'



class MapComponent extends React.Component{

    componentDidMount() {
        esriConfig.apiKey = 'AAPK1df825f3c4584985acc2fc40d7f4e236mI6PtcB-8DPeYDD24W_u2twKVkgOoSImLU4kW34p8w9RnrBO3Y9qws9XLUOYDPxs';

        const map = new Map({
            basemap: 'arcgis-topographic'
        })
        const view = new MapView({
            map: map,
            zoom: 5,
            center: [51, 2],
            container: 'viewMap',
        })
        console.log('xd')
    }


    render(){

    return(
        <>
            <div id='viewMap'>

            </div>
        </>
    )
}}


export default MapComponent