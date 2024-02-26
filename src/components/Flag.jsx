import { useGame } from '../context/GameContext';
import Loading from './Loading';

function Flag() {
    const {randomFlag, randomCountry} = useGame();
    return (
      <div className="h-[330px] w-fit m-auto text-center flex flex-col justify-center">
                {randomFlag ? (
                        <div className="mx-auto">
                            <img
                            src={randomFlag}
                            alt={randomCountry}
                            className="max-h-[300px] max-w-[500px]"
                            />
                        </div>
                          )
                          :
                        <Loading/>
                        }
      </div>
    );
}

export default Flag
