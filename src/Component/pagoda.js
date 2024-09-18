import React, { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';

function Pagoda({ name, icon, image }) {
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
    <Marker position={[21.152968, 94.861757]} icon={icon}>
      <Popup>
        <div>
          <h3>{name}</h3>
          <img 
            src={image}
            alt={name} 
            className="w-full h-auto mt-1"
          />
        </div>
      </Popup>
    </Marker>
  ) : null;
}

export default Pagoda;
