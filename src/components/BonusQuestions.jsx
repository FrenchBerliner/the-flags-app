import { useGame } from '../context/GameContext';


function BonusQuestions() {

    const {zone, setSelectedCapital, selectedCapital} = useGame();

    function handleSelectedCapital(event){
        setSelectedCapital(event.target.value);
    }
    
    return (
        <div className='flex flex-col py-5'>
            <select type="text" value={selectedCapital} onChange={handleSelectedCapital} className='w-fit mx-auto pl-2 py-2 pr-6 rounded-full'>
                <option value="" disabled selected hidden>Capital City</option>
                {zone.sort((a, b) => a.capital.localeCompare(b.capital)).map((el)=><option value={el.capital} key={el.id}>{el.capital}</option>)}
            </select>
        </div>
    )
}

export default BonusQuestions































// import { useState } from 'react';
// import { useGame } from '../context/GameContext';
// import EndMessage from "./EndMessage"

// function BonusQuestions() {
//     const {startGame, handleNext, gameOn, randomCountry, randomEuSince, assessment,setBonusPoints,setAssessment, allIndexes, zoneName, zone} = useGame();

//     const [selectedCapital, setSelectedCapital] = useState("");
//     const [selectedPopulation, setSelectedPopulation] = useState("");
//     const [selectedSurface, setSelectedSurface] = useState("");
//     const [selectedEntryDate, setSelectedEntryDate] = useState("");

//     function handleNextAndBonus(){
//         handleNext();
//         // {assessment && handleGuessedCountries()};
//         handleBonusAnswers();
//         setSelectedCapital("");
//         setSelectedPopulation("");
//         setSelectedSurface("");
//         setSelectedEntryDate("");
//     }

//     function handleBonusAnswers() {
//         // alert(selectedCapital);
//         if (selectedCapital === randomCountry) {
//             setBonusPoints((el)=>el+1);
//             setSelectedCapital("");
//         };
//         if (selectedPopulation === randomCountry) {
//             setBonusPoints((el)=>el+1);
//             setSelectedPopulation("");
//         };
//         if (selectedSurface === randomCountry) {
//             setBonusPoints((el)=>el+1);
//             setSelectedSurface("");
//         };
//         if (selectedEntryDate === randomEuSince) {
//             setBonusPoints((el)=>el+1);
//             setSelectedEntryDate("");
//         };
//         setAssessment(false);
//     }

//     function handleSelectedCapital(event){
//         setSelectedCapital(event.target.value);
//     }
//     function handleSelectedPopulation(event){
//         setSelectedPopulation(event.target.value);
//     }
//     function handleSelectedSurface(event){
//         setSelectedSurface(event.target.value);
//     }
//     function handleSelectedEntryDate(event){
//         setSelectedEntryDate(event.target.value);
//     }

//     return (
//         <div className="py-10 bg-slate-200">
//         {
//         assessment &&
//         <div className='flex flex-col'>
//         <p className='text-2xl font-bold text-black text-center mb-3'>{randomCountry}</p>
//             <select type="text" value={selectedCapital} onChange={handleSelectedCapital} className="w-1/2 mx-auto h-8 rounded-full pl-5 mb-2">
//                 <option value="" disabled selected hidden>Capital City</option>
//                 {zone.map((el)=>   <option value={el.country}>{el.capital}</option>)}
//                 {/* <option value="Netherlands">AMSTERDAM</option>
//                 <option value="Greece">ATHENS</option>
//                 <option value="Germany">BERLIN</option>
//                 <option value="Slovakia">BRATISLAVA</option>
//                 <option value="Belgium">BRUSSELS</option>
//                 <option value="Romania">BUCHAREST</option>
//                 <option value="Hungary">BUDAPEST</option>
//                 <option value="Denmark">COPENHAGEN</option>
//                 <option value="Ireland">DUBLIN</option>
//                 <option value="Finland">HELSINKI</option>
//                 <option value="Slovenia">LJUBLJANA</option>
//                 <option value="Portugal">LISBON</option>
//                 <option value="Luxembourg">LUXEMBOURG</option>
//                 <option value="Spain">MADRID</option>
//                 <option value="Cyprus">NICOSIA</option>
//                 <option value="France">PARIS</option>
//                 <option value="Czechia">PRAGUE</option>
//                 <option value="Latvia">RIGA</option>
//                 <option value="Italy">ROME</option>
//                 <option value="Bulgaria">SOFIA</option>
//                 <option value="Sweden">STOCKHOLM</option>
//                 <option value="Estonia">TALLINN</option>
//                 <option value="Malta">VALLETTA</option>
//                 <option value="Austria">VIENNA</option>
//                 <option value="Lithuania">VILNIUS</option>
//                 <option value="Poland">WARSAW</option>
//                 <option value="Croatia">ZAGREB</option> */}
//             </select>

//             <select type="text" value={selectedPopulation} onChange={handleSelectedPopulation} className="w-1/2 mx-auto h-8 rounded-full pl-5 mb-2">
//                 <option value="" disabled selected hidden>Population</option>
//                 <option value="Malta">514,000</option>
//                 <option value="Luxembourg">634,000</option>
//                 <option value="Cyprus">905,000</option>
//                 <option value="Estonia">1,332,000</option>
//                 <option value="Latvia">1,862,000</option>
//                 <option value="Slovenia">2,102,000</option>
//                 <option value="Lithuania">2,794,000</option>
//                 <option value="Croatia">3,862,000</option>
//                 <option value="Ireland">4,862,000</option>
//                 <option value="Slovakia">5,410,000</option>
//                 <option value="Finland">5,548,000</option>
//                 <option value="Denmark">5,873,000</option>
//                 <option value="Bulgaria">6,839,000</option>
//                 <option value="Austria">8,979,000</option>
//                 <option value="Hungary">9,050,000</option>
//                 <option value="Portugal">10,295,000</option>
//                 <option value="Greece">10,378,000</option>
//                 <option value="Czechia">10,517,000</option>
//                 <option value="Sweden">10,590,000</option>
//                 <option value="Belgium">11,618,000</option>
//                 <option value="Netherlands">17,474,000</option>
//                 <option value="Romania">19,147,000</option>
//                 <option value="Poland">38,265,000</option>
//                 <option value="Spain">47,450,000</option>
//                 <option value="Italy">60,317,000</option>
//                 <option value="France">67,081,000</option>
//                 <option value="Germany">83,190,000</option>
//             </select>

//             <select type="text" value={selectedSurface} onChange={handleSelectedSurface} className="w-1/2 mx-auto h-8 rounded-full pl-5 mb-2">
//             <option value="" disabled selected hidden>Surface</option>
//             <option value="Malta">316 km²</option>
//             <option value="Luxembourg">2,500 km²</option>
//             <option value="Cyprus">9,000 km²</option>
//             <option value="Slovenia">20,000 km²</option>
//             <option value="Belgium">30,000 km²</option>
//             <option value="Netherlands">34,000 km²</option>
//             <option value="Denmark">42,000 km²</option>
//             <option value="Estonia">43,000 km²</option>
//             <option value="Slovakia">49,000 km²</option>
//             <option value="Croatia">56,000 km²</option>
//             <option value="Lithuania">62,500 km²</option>
//             <option value="Latvia">63,000 km²</option>
//             <option value="Ireland">69,000 km²</option>
//             <option value="Czechia">77,000 km²</option>
//             <option value="Austria">82,000 km²</option>
//             <option value="Portugal">90,000 km²</option>
//             <option value="Hungary">91,000 km²</option>
//             <option value="Bulgaria">110,000 km²</option>
//             <option value="Greece">130,000 km²</option>
//             <option value="Romania">234,000 km²</option>
//             <option value="Italy">298,000 km²</option>
//             <option value="Finland">304,000 km²</option>
//             <option value="Poland">307,000 km²</option>
//             <option value="Germany">353,000 km²</option>
//             <option value="Sweden">407,000 km²</option>
//             <option value="Spain">503,000 km²</option>
//             <option value="France">634,000 km²</option>
//             </select>
//             {zoneName==="europe" &&
//                         <select type="text" value={selectedEntryDate} onChange={handleSelectedEntryDate} className="w-1/2 mx-auto h-8 rounded-full pl-5 mb-2">
//                             <option value="" disabled selected hidden>Joined the EU in</option>
//                             <option value="1958">1958</option>
//                             <option value="1973">1973</option>
//                             <option value="1981">1981</option>
//                             <option value="1986">1986</option>
//                             <option value="1995">1995</option>
//                             <option value="2004">2004</option>
//                             <option value="2007">2007</option>
//                             <option value="2013">2013</option>
//                         </select>}
//         </div>
//         }  



//             {!gameOn && allIndexes.length>0 && <button onClick={startGame} className="bg-[#00FF00] hover:bg-[#2196f3] py-4 px-6 rounded-full font-semibold">
//             START</button>}
//             {gameOn && <button onClick={handleNextAndBonus} className="bg-[#2196f3] hover:bg-[#00FF00] py-4 px-6 rounded-full font-semibold">
//             NEXT</button>}
//             {!gameOn && (allIndexes.length === 0) && <EndMessage/>}
//         </div>
//     )
// }

// export default BonusQuestions
