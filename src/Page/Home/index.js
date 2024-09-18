import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Pagoda from "../../Component/pagoda";

function LimitBounds({ bounds }) {
  const map = useMap();

  useEffect(() => {
    map.setMaxBounds(bounds);
    map.fitBounds(bounds); 
  }, [map, bounds]);

  return null;
}

const blueSkyImage = L.icon({
  iconUrl: '/restaurant.png',
  iconSize: [18, 18],
  iconAnchor: [9, 18],     
  popupAnchor: [0, -18] 
});

const pagodaIcon = L.icon({
  iconUrl: '/pagoda.png',
  iconSize: [20, 20],
  iconAnchor: [6, 20],     
  popupAnchor: [0, -20] 
});

function BlueSky() {
  const [zoomLevel, setZoomLevel] = useState(16);
  const map = useMap();

  useEffect(() => {
    const handleZoom = () => {
      setZoomLevel(map.getZoom());
    };

    map.on('zoomend', handleZoom);
    handleZoom(); 

    return () => {
      map.off('zoomend', handleZoom);
    };
  }, [map]);

  const showMarker = zoomLevel > 14;

  return showMarker ? (
    <Marker position={[21.153394, 94.860642]} icon={blueSkyImage}>
      <Popup>
        <div>
          <h3>Blue Sky Restaurant</h3>
          <img 
            src={"/ကောင်းကင်ပြာ.png"}
            alt={"ကောင်းကင်ပြာ"} 
            className="w-full h-auto mt-1"
          />
        </div>
      </Popup>
    </Marker>
  ) : null;
}

function Index() {
  const center = [21.170582, 94.866615];
  const zoom = 16;  

  const bounds = [
    [21.2100, 94.9690],
    [21.1200, 94.8390]
  ];

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LimitBounds bounds={bounds} />
        <BlueSky />
        <Pagoda name="ရှင်ပင်ဥတ္တမဘုရား" icon={pagodaIcon} image="/ရှင်ပင်ဥတ္တမဘုရား.png" position={[21.152968, 94.861757]} location="မြင်းကပါရွာထဲ"/>
        <Pagoda name="မနူဟာဘုရား" icon={pagodaIcon} image="/မနူဟာဘုရား.png" position={[21.153361, 94.859134]} location="မြင်းကပါရွာထဲ" />
      </MapContainer>
    </div>
  );
}

export default Index;
