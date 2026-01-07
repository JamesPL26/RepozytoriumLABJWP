import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Counter from './Counter';
import InputTracker from './InputTracker';
import LoginStatus from './LoginStatus';
import TodoList from './TodoList';
import LoginForm from './LoginForm';

function HelloWithProps(props) {
  return <h1>Witaj, {props.name}!</h1>;
}

function App() {
    const todos = [
    "Praca",
    "Nauka",
    "Odpoczynek"
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        

        {/* Zadanie 1 */}
        <Hello />

        {/* Zadanie 2 */}
        <HelloWithProps name="Jakub" />
        <HelloWithProps name="Maciej" />
        <HelloWithProps name="Kamil" />

        {/* Zadanie 3 */}
        <Counter />

        {/* Zadanie 4 */}
        <InputTracker />

        {/* Zadanie 5 */}
        <LoginStatus isLoggedIn={true} />
        <LoginStatus isLoggedIn={false} />

        {/* Zadanie 6 */}
        <h2>Lista do zrobienia</h2>
      <TodoList todos={todos} />
        {/* Zadanie 7 */}
        <LoginForm/>
      </header>
    </div>
  );
}

export default App;
