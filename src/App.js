import "./App.css";
import { StartPage } from "./components/StartPage";
import { StartButton } from "./components/StartButton";
import { Board } from "./components/Board";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <header className="title">TicTacToe</header>
      <h1 className="name">Jacob Im</h1>
      <Board />
    </div>
  );
}

export default App;
