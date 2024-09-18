import React, { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';

function Pagoda({ name, icon, image,position,location }) {
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
    <Marker position={position} icon={icon}>
      <Popup>
        <div>
          <div className='w-[300px] h-[110px] flex gap-2'>
            <div className='w-[49%] h-full border rounded-md border-black p-1' >
            <img 
            src={image}
            alt={name} 
            className="w-full h-[100px]"
          />
            </div>
            <div className='w-[49%] h-full border rounded-md border-black p-1'>
            <img 
            src={image}
            alt={name} 
            className="w-full h-[100px]"
          />
            </div>
          </div>
          <div className='text-black font-semibold mt-1'>နာမည် : {name}</div>
          <div className='text-black font-semibold mt-1'>နေရာ : {location}</div>
            <div className='flex justify-end'>
                <button className='text-xs text-white bg-blue-500 p-2 rounded-lg'>အသေးစိတ်ကြည့်ရန်</button>
            </div>
        </div>
      </Popup>
    </Marker>
  ) : null;
}

export default Pagoda;
