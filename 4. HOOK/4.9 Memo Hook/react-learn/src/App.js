import React, { useMemo, useState } from "react";

function Item(props) {
  return <li>{ props.value }</li>;
}

function App() {
  console.log("App render");

  const [range, setRange] = useState({ min: 1, max: 10000 });
  const [num, setNum] = useState(0);

  /* const list = [];
  for (let i = range.min; i <= range.max; i++) {
    console.log(i);
    list.push(<Item key={ i } value={ i } />);
  } */
  const list = useMemo(() => {
    console.log("memo");
    const list = [];
    for (let i = range.min; i <= range.max; i++) {
      list.push(<Item key={ i } value={ i } />);
    }

    // 用于保持一些比较稳定的数据，通常用于性能优化
    // 如果React元素本身的引用没有发生变化，一定不会重新渲染
    return list;
  // }, [range]);
  // 两种写法都可以
  }, [range.min, range.max]);

  return (
    <div>
      <ul>
        { list }
      </ul>
      <input type="number" value={ num } onChange={ (e) => {
        setNum(parseInt(e.target.value));
      } } />
    </div>
  );
}

export default App;


/*
 点击改变文本的时候【正常】：


 num改变的时候【正常】：

 *  */