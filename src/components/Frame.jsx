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
    <div className="mt-10 sm:hidden text-center text-3xl">
          <h1>This 🏳️ app is designed for Desktop and Tablets</h1>
          <h1>Not for Smartphones</h1>
    </div>
    </>
  );
}

export default Frame;
