import { useGame } from '../context/GameContext';

function Score() {
    const { points,
            wrongAnswers,
            bonusPoints,
            hintPoints, 
        } = useGame();
return (
<div className='w-2/3 mx-auto mt-8 text-lg border-sky-700 font-mono flex justify-between'>
    <div className='font-bold text-center'>
        <p className='h-8 text-sky-600 flex flex-col justify-end'>Points</p>
        <p className='h-8 text-sky-600 flex flex-col justify-end'>Bonus Points</p>
        <p className='h-8 flex flex-col justify-end'>Wrong Answers</p>
        <p className='h-8 flex flex-col justify-end'>Hints</p>
    </div>
    <div className='grow ml-2'>
        <p className='h-8 border-b border-sky-700 text-sky-600'></p>
        <p className='h-8 border-b border-sky-700 text-sky-600'></p>
        <p className='h-8 border-b border-black'></p>
        <p className='h-8 border-b border-black'></p>
    </div>
    <div className='font-bold'>
        <p className='h-8 text-sky-600 flex flex-col justify-end pl-4'> {points}</p>
        <p className='h-8 text-sky-600 flex flex-col justify-end pl-4'> {bonusPoints}</p>
        <p className='h-8 flex flex-col justify-end pl-4'> {wrongAnswers}</p>
        <p className='h-8 flex flex-col justify-end pl-4'> {hintPoints}</p>
    </div>
</div>
)
}

export default Score
