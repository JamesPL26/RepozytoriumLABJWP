import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Counter from './Counter';
import InputTracker from './InputTracker';

function HelloWithProps(props) {
 return <h1>Witaj, {props.name}!</h1>;
}

function App() {
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
          Zadanie1
          <Hello/>
          Zadanie2.2
           <HelloWithProps name="Jakub" />
          <HelloWithProps name="Maciej" />
          <HelloWithProps name="Kamil" />

          Zadanie2.3
          <Counter/>
          Zadanie2.4
          <InputTracker/>
      </header>


    </div>



  );
}

export default App;
