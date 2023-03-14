import './App.css';
import Game from './components/Game.js'
import Logo from './ps.svg'
function App() {
  return (
    <div className="App">
      <header>
        <div className='Container'>
          <img className='Logo' src={Logo} alt=''></img>
          <h1>TikTakToe</h1>
        </div>
      </header>
      <main>
        <div className='Container'>
          <Game></Game>
        </div>
      </main>
    </div>
  );
}

export default App;
