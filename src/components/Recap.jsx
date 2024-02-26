/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useGame } from '../context/GameContext';

function Recap() {
  const {
    clickedCountry, remainingIndexes, remainingCountries, randomAvailableIndex, zone, zoneIndex, immutableZone, immutableIndexes, allCountriesArray, allIndexes, randomIndex, randomCountry, displayedGuessedCountries, guessedCountriesArray, zoneName, remainingIndexesArray
} = useGame();

const [checkUpIsVisible, setCheckUpIsVisible] = useState(false);
    
  return (



      <div className="grow flex flex-col bg-slate-200">
                    <div className='w-full flex justify-end'>
                        <button onClick={() => setCheckUpIsVisible(!checkUpIsVisible)} className='w-5 h-5 bg-slate-200'></button>
                    </div>
                    {checkUpIsVisible && <>
                      <div className='text-center'>
                            {`clicked country is : ${clickedCountry}`}
                    </div>
                    <div className='text-center'>
                            {`the random available index is : ${randomAvailableIndex}`}
                    </div>
                    <div className='text-center'>
                            {`the random country is : ${randomCountry}`}
                    </div>
                    <div className='text-center'>
                            {`the zone index is : ${zoneIndex}`}
                    </div>

                    <div className='grid grid-cols-6'>
                      <div>
                      <h1 className='font-bold text-2xl'>ZONE</h1>
                        {zone?.map((item)=> <div key={item.id}>{item.country}</div>)}
                      </div>
          
                      <div className='flex flex-col text-right pr-4'>
                      <h1 className='font-bold text-xl'>ImmutableIndexes</h1>
                        {immutableIndexes?.map((el)=> <div key={el}>{el}</div>)}
                      </div>
                      <div>
                      <h1 className='font-bold text-xl'>ImmutableZone</h1>
                        {immutableZone?.map((item)=> <div key={item.country}>{item.country}</div>)}
                      </div>
                      <div className='flex flex-col text-right pr-4'>
                      <h1 className='font-bold text-xl'>remainingIndexes</h1>
                        {remainingIndexes?.map((el)=> <div key={el}>{el}</div>)}
                      </div>
                      <div>
                      <h1 className='font-bold text-xl'>remainingCountries</h1>
                        {remainingCountries?.map((item)=> <div key={item}>{item}</div>)}
                      </div>
                      <div>
                      <h1 className='font-bold text-xl'>guessedCountriesArray</h1>
                        {guessedCountriesArray?.map((item)=> <div key={item}>{item.country}</div>)}
                      </div>
                  </div>
                  </>}

                {(displayedGuessedCountries?.length !== 0) &&  
                <>
                <h1 className='font-semibold text-2xl text-center py-5 border-b-2 border-sky-700 border-dotted text-sky-700'>RECAP</h1>
                <div className='flex flex-wrap gap-6 p-6 w-fit mx-auto justify-center'>
                {displayedGuessedCountries?.map((item)=> <div 
                                  data-country={item.country}
                                  className='border border-sky-600 h-fit w-[170px] rounded-xl px-5 py-2 flex flex-col justify-center text-sky-700 cursor-pointer text-center' 
                                  key={item.id}>
                                        <p className='font-bold text-lg'>{item.country}</p>
                                        <div className='w-full h-20 flex flex-col justify-center'>
                                          <img src={item.flag} alt="" className='max-h-20 m-auto' />
                                        </div>
                                        <p className='text-md'>{item.capital}</p>
                                        <p className='text-xs'>{item.population} <span className="material-symbols-outlined text-sm">person</span></p>
                                        <p className='text-xs'>{item.size} km2</p>
                                  {(zoneIndex === 0)  &&  <p className='text-xs'>{(item.EuSince !== "N/A") ? `EU since ${item.EuSince}` : 'Not in the EU'}</p>}
                                </div>)}
                </div>
                </>}
  
      </div>

  )
}

export default Recap
