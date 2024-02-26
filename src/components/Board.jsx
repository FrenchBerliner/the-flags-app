import { useGame } from '../context/GameContext';
import Hint from './Hint';
import Score from './Score';
import Flag from './Flag';
import BonusQuestions from './BonusQuestions';

function Board() {

    const {
     randomCountry, randomCapital, handleNext, assessment, handleNextAndBonus,
    } = useGame();
    
    return (
        <div className="grow h-[800px] flex flex-col justify-center bg-slate-200">
                <Score/>
                    <div className='flex gap-5 mx-auto my-1'>
                            <p className='text-green-500 opacity-0 hover:opacity-100'>{randomCountry}</p>
                            <p className='text-green-500 opacity-0 hover:opacity-100'>{randomCapital}</p>
                    </div>
                <Flag/>
                <Hint/>
                {assessment &&  <BonusQuestions/>}
                <button onClick={assessment ? handleNextAndBonus : handleNext} className='mt-5 mb-10 bg-green-500 hover:bg-green-400 focus:bg-green-600 px-8 py-2 rounded-full w-fit mx-auto font-bold text-white'>NEXT</button>

        </div>
    )
}

export default Board
