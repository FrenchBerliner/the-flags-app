import { useGame } from '../context/GameContext';


function Hint() {

    const {randomCountry, currentIndex, setCurrentIndex, setHintPoints, assessment} = useGame();

    const randomCountryLetters = randomCountry?.split('');
 
    function giveHint() {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        if (currentIndex < randomCountryLetters?.length && !assessment)  {
            setHintPoints((prev) => prev + 1);
        }
    };

    const currentLetter = randomCountryLetters?.slice(0, currentIndex + 1).join('');


    return (
        <div className='flex flex-col my-5 w-fit mx-auto'>
        { assessment ? 
            <h1 className='min-h-[35px] font-bold text-2xl text-center'>{assessment && randomCountry}</h1>
            :
            <>
            <p className='h-[1.5rem] text-center text-sky-700 font-bold'>{currentLetter}</p>
            <button onClick={giveHint} className='w-fit mx-auto mt-2 border border-sky-600 hover:bg-sky-600 text-sky-600 hover:text-white rounded-full px-4'>HINT</button>
            </>
        }
        </div>
    )
}

export default Hint
