import { useState } from "react";

export default function Game(){
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);  //an array of 9-item arrays initialized with a single array of 9 nulls
  const [currentMove, setCurrentMove] = useState(0);
  // const currentSquares = history[history.length - 1];
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;


  function handlePlay(nextSquares){
    // setHistory([...history, nextSquares]);
    const nextHistory = [...history.slice(0, currentMove+1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1);
    // setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
    // setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares,move)=>{
    let description;

    if(move>0){
      description='Go to move #' + move;
    } else{
      description='Go to game start';
    }

    if(move === currentMove){
      return(
        <li key={move}>
          You are at {move===0 ? 'start' : `move #${move}`}
        </li>
      );
    } else{
        return(
          <li key={move}>
            <button onClick={()=>jumpTo(move)}>{description}</button>
          </li>
        );
    }
    // return(
    //   <li key={move}>
    //     <button onClick={()=>jumpTo(move)}>{description}</button>
    //   </li>
    // );
  });

  return(
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}


function Board({xIsNext, squares, onPlay}) {
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i){
    if(squares[i] || calculateWinner(squares)) { return; }

    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = 'X';
    } else{
      nextSquares[i] = 'O';
    }
    // nextSquares[i] = 'X';

    onPlay(nextSquares);
    // setSquares(nextSquares);
    // setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;

  if(winner){
    status = "Winner: " + winner;
  } else{
    status = "Next player: " + (xIsNext ? 'X' : 'O');
  }

  return(
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button> */}
        {/* <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/> */}
        {/* <Square />
        <Square />
        <Square /> */}
        <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
      </div>
      <div className="board-row">
        {/* <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button> */}
        {/* <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/> */}
        {/* <Square />
        <Square />
        <Square /> */}
        <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
        {/* <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button> */}
        {/* <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/> */}
        {/* <Square />
        <Square />
        <Square /> */}
        <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
      </div>
    </>
  );
}


function Square({value, onSquareClick}){
  // const [value, setValue] = useState(null);

  // function handleClick(){
  //   // console.log("Clicked!");
  //   setValue('X');
  // }

  // return <button className="square">1</button>;
  // return (
  //   <button
  //     className="square"
  //     onClick={handleClick}
  //   >
  //     {value}
  //   </button>
  // );
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}


function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for(let i=0; i < lines.length; i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }

  return null;
}