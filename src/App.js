import "./App.css";
import { Board } from "./components/Board";

//import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <h1 className="title">TicTacToe</h1>
        <h2 className="name">Jacob Im</h2>
      </header>
      <Board />
    </div>
  );
}

export default App;
