import { useState } from 'react';
import { useGame } from '../context/GameContext';


function ZoneChoice() {

const {allZonesNames, setZoneIndex} = useGame();

const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

function handleChoiceZone(index) {
    setZoneIndex(index);
    setSelectedButtonIndex(index);
};

return (
        <div className='flex'>
            {allZonesNames.map((el, index) => <button key={index} onClick={()=>handleChoiceZone(index)} className={`${(index===selectedButtonIndex) ? "bg-slate-200 text-sky-700" : "bg-slate-400 text-sky-600 opacity-50"}  text-lg font-bold px-5 py-3 rounded-tr-3xl`}>{allZonesNames[index]}</button>)}
        </div>
    )
}

export default ZoneChoice
