import { useGame } from '../context/GameContext';

function EndMessage() {
    const { 
        points,
        bonusPoints,
        wrongAnswers,
        hintPoints,
        immutableIndexes,
    } = useGame();
    return (
        <div className="grow h-[800px] flex flex-col justify-center bg-slate-200">
        {((points + bonusPoints - wrongAnswers) > (immutableIndexes.length/2)) ? 
            <div className="text-center font-semibold text-3xl text-sky-700 py-5">
                Well Done!
            </div>
            :
            <div className="text-center font-semibold text-3xl text-sky-700 py-5">
                oh well... 😬
            </div>
        }
            <div className="text-center font-semibold text-3xl text-[#59e659] pt-5">
                Your Total is {points + bonusPoints - wrongAnswers} Points ! 
            </div>
            <p className="text-md text-center font-semibold text-[#59e659] py-5">(Points + Bonus Points - Wrong Answers)</p>
            <div className="text-center font-semibold text-xl text-sky-700 py-5">
                {hintPoints === 0 ? "👉🏻 you haven't asked for any hints! :)" : `You've only needed ${hintPoints} little hints...`}
            </div>
        </div>
    )
}

export default EndMessage

//{points + bonusPoints - wrongAnswers}