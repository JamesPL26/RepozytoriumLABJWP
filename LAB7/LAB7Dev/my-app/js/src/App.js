import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import ClickCounter from './ClickCounter'
import PrimeCalculator from './PrimeCalculator'
import FormReducer from './FormReducer';
import LayoutEffectExample from './LayoutEffectExample';
import ThemeSwitcher from './ThemeSwitcher';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
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
          <Hello />
          <ClickCounter />
          <PrimeCalculator />
          <FormReducer />
          <LayoutEffectExample />
          <ThemeSwitcher />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
