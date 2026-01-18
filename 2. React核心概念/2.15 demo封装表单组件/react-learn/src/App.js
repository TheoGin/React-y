import React from "react";
import CheckboxGroup from "./components/common/CheckboxGroup";

function App(props) {

  const chooseDatas = ['football'];
  return (
    <div>
      <CheckboxGroup datas={
        [
          {value: "football", text: "足球"},
          {value: "basketball", text: "篮球"},
          {value: "movie", text: "电影"},
          {value: "music", text: "音乐"},
          {value: "other", text: "其他"},
        ]
      } chooseDatas={chooseDatas} onChoose={(chooseDatas) => {
        console.log('app chooseDatas', chooseDatas);
      }} />
    </div>
  );
}

export default App;