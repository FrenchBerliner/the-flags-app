/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState, } from "react";
import _ from 'lodash';
import { europe } from '../data/europe';
import { asia } from '../data/asia';
import { usa } from "../data/usa";
import { latinamerica } from "../data/latinamerica";
import { africa } from "../data/africa";
import { oceania } from "../data/oceania";
import europemap from "../data/europemap.json";
import asiamap from "../data/asiamap.json";
import latinamericamap from "../data/latinamericamap.json";
import usamap from "../data/usamap.json";
import oceaniamap from "../data/oceaniamap.json";
import africamap from "../data/africamap.json";



const GameContext = createContext();


function GameProvider({children}) {

  
//#region _____ Accent Issue for Speech Function _______________________________
useEffect(function(){
  const voices = speechSynthesis.getVoices();  // Get the voices
  const americanVoice = voices.find(voice => voice.lang === 'en-US'); // Find the American English voice
  const utterance = new SpeechSynthesisUtterance(`incorrect`); // Create a SpeechSynthesisUtterance
  utterance.voice = americanVoice; // Set the voice to American English
  if (utterance.voice === americanVoice) {
    speechSynthesis.speak(utterance); // Speak the text
  }
}, [])
//#endregion _____ Accent Issue for Speech Function _______________________________


const [isLoading, setIsLoading] = useState(false);
const [assessment, setAssessment] = useState(false);
const [gameOn, setGameOn] = useState(true);

const [zoneIndex, setZoneIndex] = useState(0);
const allZones = [europe, asia, usa, latinamerica, africa, oceania]; 
const allZonesNames = ["europe", "asia", "usa", "america", "africa", "oceania"];
const [zone, setZone] = useState(europe);

const [immutableZone, setImmutableZone] = useState();
const [immutableIndexes, setImmutableIndexes] = useState();
const [remainingCountries, setRemainingCountries] = useState();
const [remainingIndexes, setRemainingIndexes] = useState();


const zoneHighlights = [europemap, asiamap, usamap, latinamericamap, africamap, oceaniamap];
const zoneZooms = [4, 3, 4, 3.5, 4, 4];
const zonePositions = [[57, 10],[40, 90],[35, -95],[-15, -80],[2, 15], [-25, 145]];
const [mapPosition, setMapPosition] = useState(zonePositions[zoneIndex]);
const [zoom, setZoom] = useState(zoneZooms[zoneIndex]);
const [highlightedCountries, setHighlightedCountries] = useState(zoneHighlights[zoneIndex]);

const [randomAvailableIndex, setRandomAvailableIndex] = useState();
const [randomCountry, setRandomCountry] = useState();
const [randomFlag, setRandomFlag] = useState();
const [randomCapital, setRandomCapital] = useState();
const [randomDesignation, setRandomDesignation] = useState();

const [points, setPoints] = useState(0);
const [wrongAnswers, setWrongAnswers] = useState(0);
const [bonusPoints, setBonusPoints] = useState(0);
const [hintPoints, setHintPoints] = useState(0);

const [currentIndex, setCurrentIndex] = useState(-1);

const [guessedCountriesArray, setGuessedCountriesArray] = useState([]);
const [displayedGuessedCountries, setDisplayedGuessedCountries] = useState(guessedCountriesArray);
const [clickedCountry, setClickedCountry] = useState();  


// Initialization of a zone ________________________________________________________________________________________________


useEffect(function(){     //what happens when we first mount, or when zoneIndex changes :

setGameOn(true);  
setAssessment(false);

// re-set lists of data :
setRemainingIndexes([]);
setRemainingCountries([]);
setImmutableZone([]);
setImmutableIndexes([]);  
setGuessedCountriesArray([]);
setDisplayedGuessedCountries([]);
    
// re-set the scores :
setPoints(0);
setWrongAnswers(0);
setBonusPoints(0);
setHintPoints(0);
    
// Get the content of the chosen Zone : 
setZone(allZones[zoneIndex]);
    
// Set the position of the map on the chosen Zone: 
setMapPosition(zonePositions[zoneIndex]);
setZoom(zoneZooms[zoneIndex]);
setHighlightedCountries(zoneHighlights[zoneIndex]);

},[zoneIndex]);




useEffect(function(){      // Feed the data from the zone into immutableZone and immutableIndexes  (as well as remainingCountries and remainingIndexes for check-up)

    if (zone) {
    const extractIndexes = zone.map((el, index)=> index);
    const extractCountries = zone.map((el)=> el.country);

    setRemainingIndexes(extractIndexes);
    setRemainingCountries(extractCountries);


      const immutableZoneCopy = _.cloneDeep(zone);
      setImmutableZone(immutableZoneCopy);
      setImmutableIndexes([...extractIndexes]);

      }

},[zone]);







//Get First Random Country ________________________________________________________________________________________________

useEffect(function(){
  // Ensure remainingIndexes is truthy and has elements
  if (remainingIndexes && remainingIndexes.length > 0) {         // if(remainingIndexes) {
    const randomNumber = Math.floor(Math.random() * remainingIndexes.length);
    setRandomAvailableIndex(remainingIndexes[randomNumber]);
  };
  setCurrentIndex(-1);
  },[remainingIndexes]);
  

// Extract randomCountry from zone, according to the chosen randomAvailableIndex.
useEffect(function(){
  // Ensure randomAvailableIndex is truthy
  if (randomAvailableIndex !== undefined && randomAvailableIndex !== null) {
    // Ensure the index is within the bounds of immutableZone
    if (randomAvailableIndex < immutableZone.length) {          // if(randomAvailableIndex) {
      setRandomCountry(immutableZone[randomAvailableIndex].country);
      setRandomFlag(immutableZone[randomAvailableIndex].flag);
      setRandomCapital(immutableZone[randomAvailableIndex].capital);
      setRandomDesignation(immutableZone[randomAvailableIndex].designation);
    }
  }
}, [randomAvailableIndex])








// Answer & Next ________________________________________________________________________________________________

function handleAnswer(e) {
  if (randomDesignation === e) {
    setAssessment(true);
        //___________________________
        const voices = speechSynthesis.getVoices();  // Get the voices
        const americanVoice = voices.find(voice => voice.lang === 'en-US'); // Find the American English voice
        const utterance = new SpeechSynthesisUtterance(`${randomCountry} is correct`); // Create a SpeechSynthesisUtterance
        utterance.voice = americanVoice; // Set the voice to American English
        speechSynthesis.speak(utterance); // Speak the text
        //___________________________
        setPoints((points) => points+1);
        setGuessedCountriesArray(guessedCountriesArray => [...guessedCountriesArray, immutableZone[randomAvailableIndex]]);
        setCurrentIndex(-1);
  } else {
  if (e !== randomDesignation) {
    setWrongAnswers((el)=>el+1);
    //___________________________
        const voices = speechSynthesis.getVoices();  // Get the voices
        const americanVoice = voices.find(voice => voice.lang === 'en-US'); // Find the American English voice
        const utterance = new SpeechSynthesisUtterance(`incorrect`); // Create a SpeechSynthesisUtterance
        utterance.voice = americanVoice; // Set the voice to American English
        if (utterance.voice === americanVoice) {
          speechSynthesis.speak(utterance); // Speak the text
        }
    //___________________________  
    }
  } 
  setMapPosition(zonePositions[zoneIndex]);
  setZoom(zoneZooms[zoneIndex]);
}

function handleNext() {
  setCurrentIndex(-1);
  if (remainingIndexes && remainingIndexes.length > 1) {     
    const randomNumber = Math.floor(Math.random() * remainingIndexes.length);
    setRandomAvailableIndex(remainingIndexes[randomNumber]);
  } else if (remainingIndexes.length===1) {
    setRandomAvailableIndex(remainingIndexes[0]);
  } 
}

function handleNextAndBonus() {
  setCurrentIndex(-1);
  setDisplayedGuessedCountries(guessedCountriesArray);
  if (assessment) {
    if (remainingIndexes && remainingIndexes.length > 1) {  
    let updatedRemainingIndexes = remainingIndexes.filter((el)=> el !== randomAvailableIndex);
    setRemainingIndexes(updatedRemainingIndexes);
    let updatedRemainingCountries = remainingCountries.filter((el)=> el !== randomCountry);
    setRemainingCountries(updatedRemainingCountries);
    } else if (remainingIndexes.length===1) {
      setGameOn(false);
    } 
    handleBonusAnswers();
  }
  setSelectedCapital("");
}

const [selectedCapital, setSelectedCapital] = useState("");

function handleBonusAnswers() {
  if (selectedCapital === randomCapital) {
      setBonusPoints((el)=>el+1);
  };
  setAssessment(false);
}








return (
      <GameContext.Provider
        value={{
          //#region _____ values from context _____
            zone,
            immutableZone,
            immutableIndexes,
            setZoneIndex,
            zoneIndex,
            allZonesNames,
            displayedGuessedCountries,
            randomAvailableIndex,
            remainingIndexes,
            randomCountry,
            randomFlag,
            randomCapital,
            randomDesignation,
            zoom, 
            mapPosition, 
            highlightedCountries,
            assessment, 
            points, 
            wrongAnswers,
            bonusPoints,
            hintPoints,
            setHintPoints,
            handleAnswer,
            handleNext,
            handleNextAndBonus,
            currentIndex, 
            setCurrentIndex,
            remainingCountries,
            gameOn,
            selectedCapital,
            setSelectedCapital,
            guessedCountriesArray,
            clickedCountry,
            setClickedCountry
          //#endregion _____ values from context _____
        }}
      >
        {children}
      </GameContext.Provider>
    );    
}

function useGame() {
    const context = useContext(GameContext);
    if(context === undefined) throw new Error("The Game Context was used outside of the GameProvider");
    return context;
}

export {GameProvider, useGame};