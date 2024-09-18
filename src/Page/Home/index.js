import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; 

function LimitBounds({ bounds }) {
  const map = useMap();

  useEffect(() => {
    map.setMaxBounds(bounds);
    map.fitBounds(bounds); 
  }, [map, bounds]);

  return null;
}

const customIcon = L.icon({
  iconUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600', 
  iconSize: [28, 28], 
  iconAnchor: [19, 38], 
  popupAnchor: [0, -38] 
});

function Index() {
  const center = [21.170582, 94.866615]; 
  const zoom = 16; 

  const bounds = [
    [21.2000, 94.9690],  
    [21.1200, 94.8390]   
  ];

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LimitBounds bounds={bounds} />

        <Marker position={[21.153394, 94.860642]} icon={customIcon}>
          <Popup>
            <div>
              <h3>Kaung Khant Xmue</h3>
              <img
                src="https://example.com/image.jpg"
                alt="Kaung Khant Xmue"
                style={{ width: '100px', height: 'auto' }}
              />
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Index;
