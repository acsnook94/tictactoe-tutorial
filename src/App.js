import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }

  return(
    <>
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

// function Square({value}){
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