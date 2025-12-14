import React from "react";
import ReactDOM from "react-dom";
import './index.css'

const cls = 'img';
const url = 'https://img2.baidu.com/it/u=181978406,3569624483&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=628';
const imgReactEle = (
  <img
    src={url}
    className={ cls }
    style={
      {
        width: '100px',
        marginLeft: '20px'
      }
    }
    alt=""
  />
)

ReactDOM.render(imgReactEle, document.getElementById('root'))