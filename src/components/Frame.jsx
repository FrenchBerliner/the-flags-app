import { useGame } from '../context/GameContext';
import ZoneChoice from "./ZoneChoice";
import Board from "./Board";
import Map from "./Map";
import Recap from "./Recap";
import EndMessage from "./EndMessage";

function Frame() {
  const { gameOn} = useGame();

  return (
    <>
    <div className="mt-10 hidden sm:block">
            <ZoneChoice/>
            <div className="flex flex-wrap justify-stretch bg-slate-200">
              {(gameOn) ?  <Board /> : <EndMessage/>}
              <Map />
            </div>
            <div className="w-full">
              <Recap/>
            </div>

    </div>
    <div className="h-[200px] mt-10 sm:hidden text-center text-xl flex flex-col justify-center">
          <h1>This 🏳️ app is designed <br />for Desktop & Tablets only</h1>
    </div>
    </>
  );
}

export default Frame;
