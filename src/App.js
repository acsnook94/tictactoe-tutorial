export default function Board() {
  return(
    <>
      <div className="board-row">
        {/* <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button> */}
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
      <div className="board-row">
        {/* <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button> */}
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div className="board-row">
        {/* <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button> */}
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
      </div>      
    </>
  );
}

function Square({value}){
  // return <button className="square">1</button>;
  return <button className="square">{value}</button>;
}