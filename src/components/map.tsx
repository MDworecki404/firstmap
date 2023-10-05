import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import esriConfig from '@arcgis/core/config'
import './map.css'
import React from 'react'
import BaseMapToggle from '@arcgis/core/widgets/BasemapToggle'
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery'



class MapComponent extends React.Component{
    state = {
        isLoading: false,
    }

    componentDidMount()
     {
        esriConfig.apiKey = 'AAPK1df825f3c4584985acc2fc40d7f4e236mI6PtcB-8DPeYDD24W_u2twKVkgOoSImLU4kW34p8w9RnrBO3Y9qws9XLUOYDPxs';

        const map = new Map({
            basemap: 'arcgis-topographic'
        })
        const view = new MapView({
            map: map,
            zoom: 3,
            center: [51.1097114571566, 17.032971554222108],
            container: 'viewMap',
        })
        const basemapToggle = new BaseMapToggle({
            view: view,
            nextBasemap: 'arcgis-imagery'
        })
        view.ui.add(basemapToggle, 'bottom-right')
        const basemapGallery = new BasemapGallery({
            view: view,
            source: {
                query: {
                    title: 'World Basemaps'
                }
            }
        })
        view.ui.add(basemapGallery, 'top-right')
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