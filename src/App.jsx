import Frame from './components/Frame';
import {GameProvider} from './context/GameContext';


function App() {

  return (
    <div>
        <div className='mt-10 mb-14 bg-white w-11/12 mx-auto shadow-xl relative 2xl:w-5/6 py-20 px-5 lg:px-10'>
            {/* <a href="https://jerome-p.com/portfolio.html" className="text-decoration-none border border-blue-600 text-xl font-semibold text-blue-600 text-center p-1 md:p-3 font-sans hover:bg-blue-600 hover:text-white w-28 rounded m-3 absolute right-3 top-3 cursor-pointer">Back</a> */}
            <h1 className='text-center text-2xl font-bold text-slate-900 border-y border-slate-900 w-fit mx-auto px-20'>World Flags App</h1>
            <p className='text-center italic text-sky-600 mt-10 font-medium text-lg'>... Test Your Knowledge ! ...</p>
            <GameProvider>
                <Frame/>
            </GameProvider>
        </div>
        <footer className="flex items-end w-fit mx-auto pb-10">Made in <img src="/images/fehrnsehturm copie.png" alt="" width="10px" className="mx-1"></img> with ♡</footer>
    </div>
  );
}

export default App


