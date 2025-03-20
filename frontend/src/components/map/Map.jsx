import React, { useState, useEffect } from "react";
import classes from "./map.module.css";
import "leaflet/dist/leaflet.css";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
} from "react-leaflet";
import { toast } from "react-toastify";
import * as L from "leaflet";

function Map({ randomly, location, onChange }) {
    return (
        <>
            <MapContainer>
                <TileLayer />
            </MapContainer>
        </>
    );
}

export default Map;
