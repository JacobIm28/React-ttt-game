import React from "react";
import { useState } from "react";
import "./Board.css";
import Square from "./Square";
import compMove from "./Computer";

export function Board() {
  const [board, updateBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, togglePlayer] = useState("X"); //Use state doesn't work
  const [mode, toggleMode] = useState(false); //true means single player

  const updateCell = (s) => {
    if (s === "X") {
      return "O";
    } else if (s === "O") {
      return "X";
    } else {
      return player;
    }
  };

  const changePlayer = (x) => {
    if (x === "X") {
      return "O";
    }
    if (x === "O") {
      return "X";
    }
  };

  const isWinner = () => {
    let winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let eachItem of winCombos) {
      if (
        board[eachItem[0]] === board[eachItem[1]] &&
        board[eachItem[1]] === board[eachItem[2]] &&
        board[eachItem[0]] !== ""
      ) {
        return true;
      }
    }
    return false;
  };

  const handleClick = (n) => {
    if (board[n] === "") {
      if (mode) {
        updateBoard(
          board.map((value, index) => {
            if (n === index && value === "") {
              return updateCell(board[n]);
            }
            return value;
          })
        );
        updateBoard(compMove(board,player,updateCell));
      } else {
        updateBoard(
          board.map((value, index) => {
            if (n === index && value === "") {
              return updateCell(board[n]);
            }
            return value;
          })
        );
        togglePlayer(changePlayer(player));
      }
    } else {
      chooseError();
    }
  };

  const chooseError = () => {
    if (isWinner()) {
      alert("Start a new game");
    } else {
      alert("Choose an empty square");
    }
  };

  const changeMode = () => {
    toggleMode(!mode);
    updateBoard(["", "", "", "", "", "", "", "", ""]);
  }

  return (
    <div>
      <div className="container">
        {isWinner() ? (
          <div className="board">
            <Square value={board[0]} onClick={() => chooseError} />
            <Square value={board[1]} onClick={() => chooseError} />
            <Square value={board[2]} onClick={() => chooseError} />
            <Square value={board[3]} onClick={() => chooseError} />
            <Square value={board[4]} onClick={() => chooseError} />
            <Square value={board[5]} onClick={() => chooseError} />
            <Square value={board[6]} onClick={() => chooseError} />
            <Square value={board[7]} onClick={() => chooseError} />
            <Square value={board[8]} onClick={() => chooseError} />
          </div>
        ) : (
          <div className="board">
            <Square value={board[0]} onClick={() => handleClick(0)} />
            <Square value={board[1]} onClick={() => handleClick(1)} />
            <Square value={board[2]} onClick={() => handleClick(2)} />
            <Square value={board[3]} onClick={() => handleClick(3)} />
            <Square value={board[4]} onClick={() => handleClick(4)} />
            <Square value={board[5]} onClick={() => handleClick(5)} />
            <Square value={board[6]} onClick={() => handleClick(6)} />
            <Square value={board[7]} onClick={() => handleClick(7)} />
            <Square value={board[8]} onClick={() => handleClick(8)} />
          </div>
        )}
      </div>
      <div className="buttons">
        <button className="toggle-mode" onClick={() => changeMode()}>
          Change Mode
        </button>
        {isWinner() ? (
          <button
            className="new-game"
            onClick={() => updateBoard(["", "", "", "", "", "", "", "", ""])}
          >
            New Game
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="display-box">
        <div>Currently in {mode ? "single player" : "mutiplayer"} mode</div>
        {mode ? (
          <div></div>
        ) : (
          <div>
            <span>{player}</span> 's turn
          </div>
        )}
        {isWinner() ? (
          <div>
            <span>{changePlayer(player)}</span> wins!
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
