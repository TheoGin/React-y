import React, { useState } from "react";

function Item(props) {
  return <li>{ props.value }</li>;
}

function App() {
  console.log('App render');

  const [range, setRange] = useState({ min: 1, max: 10000 });
  const [num, setNum] = useState(0);

  const list = [];
  for (let i = range.min; i <= range.max; i++) {
    list.push(<Item key={ i } value={ i } />);
  }

  return (
    <div>
      <ul>
        { list }
      </ul>
      <input type="number" value={num} onChange={(e) => {
        setNum(parseInt(e.target.value))
      }} />
    </div>
  );
}

export default App;


/*
 点击改变文本的时候【正常】：


 num改变的时候【正常】：

 *  */