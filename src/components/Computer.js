function compMove(board) {
  let vals = [];
  let moveDone = false;
  let updatedBoard = ["", "", "", "", "", "", "", "", ""];

  let combos = [
    [0, 1, 2], //1
    [3, 4, 5], //2
    [6, 7, 8], //3
    [0, 3, 6], //4
    [1, 4, 7], //5
    [2, 5, 8], //6
    [0, 4, 8], //7
    [2, 4, 6], //8
  ];

  //line is an array of 3 cell indices
  const placeMarker = (line) => {
    updatedBoard = board.map((value, index) => {
      if (moveDone) {
        return value;
      } else if (line.includes(index) && value === "") {
        moveDone = true;
        return "X";
      } else {
        return value;
      }
    });
  };

  const lineVal = (line) => {
    let val = 0;
    let counter = 0;

    for (let i = 0; i < 3; i++) {
      if (board[line[i]] === "O") {
        val--;
        counter++;
      } else if (board[line[i]] === "X") {
        val++;
        counter++;
      }
    }

    if (counter === 3) {
      return 0;
    } else if (counter === 2) {
      switch (val) {
        case 0:
          return 1;
        case 2:
          return 3;
        case -2:
          return 2;
        default:
          return 0;
      }
    } else {
      return 0;
    }
  };

  for (let i = 0; i < 8; i++) {
    vals.push({
      value: lineVal(combos[i]),
      line: combos[i],
    });
  }

  vals = iSort(vals);

  for (let eachLine of vals) {
    if (!moveDone) {
      placeMarker(eachLine.line);
    }
    if (moveDone) {
      return updatedBoard;
    }
  }
  return updatedBoard;
}

function iSort(vals) {
  for (let i = 1; i < vals.length; i++) {
    for (let j = i - 1; j > -1; j--) {
      if (vals[j + 1].value > vals[j].value) {
        [vals[j + 1], vals[j]] = [vals[j], vals[j + 1]];
      }
    }
  }
  return vals;
}

export default compMove;
