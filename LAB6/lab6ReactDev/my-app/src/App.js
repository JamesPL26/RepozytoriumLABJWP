import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';

function App() {
  const wynik = 67;
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      {/* INTRO */}
      <Hello/>
      {/* Zadanie 1 */}
      <ToggleDetails/>
      {/* Zadanie 2 */}
      <ScoreDisplay score={wynik}/>
      {/* Zadanie 3 */}
      <TaskList/>
      {/* Zadanie 4 */}
      <UserList/>
      {/* Zadanie 5 */}
      <TimerCounter/>

      </header>
    </div>
  );
}

export default App;

