/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap, useMapEvent} from 'react-leaflet';
import { useGame } from '../context/GameContext';





function Map() {

const {
    zoom, mapPosition, highlightedCountries, handleAnswer, setClickedCountry, zoneIndex,
} = useGame();    



const geoJSONKey = JSON.stringify(highlightedCountries);

    return (
    <MapContainer center={[55, 10]} zoom={3} scrollWheelZoom={true} className='z-[999] flex flex-grow border-2 border-sky-700 m-5' style={{height: '800px', minWidth: '50%', maxWidth: '100%',}}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <GeoJSON key={geoJSONKey} data={highlightedCountries} style={{"weight": 1}}/>
        <ChangeCenter position={mapPosition} zoom={zoom}/>
        <DetectClick handleAnswer={handleAnswer} setClickedCountry={setClickedCountry} zoneIndex={zoneIndex}/>
    </MapContainer>
    )
}



function ChangeCenter({position, zoom}) {
    const map = useMap();
    useEffect(() => {
        map.flyTo(position, zoom);
      }, [position, zoom, map]);
    return null;
}


function DetectClick({handleAnswer, setClickedCountry, zoneIndex}) {
    const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
    useMapEvent({
        click: async (e)=> {
            const lat = e.latlng.lat;
            const lng = e.latlng.lng;
            async function getNameLocation() {
                const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
                const data = await res.json();
                setClickedCountry(data.countryName);
                if (data.countryCode === 'US' && zoneIndex === 2 && data.principalSubdivision) {
                    handleAnswer(data.principalSubdivision);
                } else if (data.countryName) {
                    handleAnswer(data.countryName);
                }

            };
            getNameLocation();
        }
    })
}

export default Map


