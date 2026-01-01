import React, {Component} from "react";
import "./Pager.css";

class Pager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: props.pageNum || 1,
      showNum: props.showNum || 5,
      data: props.data || [1, 2, 3, 4, 5],
      start: 1,
    };
  }

  handleClick = (e) => {
    this.setState({
      pageNum: +e.target.textContent
    })
  }

  handleFirst = () => {
    this.setState({
      pageNum: 1
    })
  }

  handleLast = () => {
    this.setState({
      pageNum: this.state.data.length
    })
  }

  handlePre = () => {
    if (this.state.pageNum <= 1) {
      return;
    }
    this.setState({
      pageNum: this.state.pageNum - 1,
    })
  }

  handleNext = () => {
    if (this.state.pageNum >= this.state.data.length) {
      return;
    }
    console.log('total', this.total);
    console.log('this.state.data.length', this.state.data.length);
    this.setState({
      pageNum: this.state.pageNum + 1,
    })
  }

  render() {
    const links = [];
    let total = this.state.pageNum + this.state.showNum;
    if (total > this.state.data.length) {
      total = this.state.data.length
    }
    let start = 1;
    for (let i = start; i <= total; i++) {
      if (start < total / 2) {
        start++;
      }
      console.log(start);
      console.log(total);
      const li = <li key={i} onClick={this.handleClick}>
        <a href="#" className={this.state.pageNum === i ? "active" : ""}>
          {i}
        </a>
      </li>;
      links.push(li);
    }

    return (
      <div className="pager-container">
        <a href="#" onClick={this.handleFirst} className={this.state.pageNum === 1 ? 'first item disabled' : 'first item'}>首页</a>
        <a href="#" onClick={this.handlePre} className={this.state.pageNum === 1 ? 'first item disabled' : 'first item'}>上一页</a>
        {/*<a href="#" className="item active">1</a>*/}
        <ul>
          {links}
        </ul>
        <a href="#" onClick={this.handleNext} className={this.state.pageNum === this.state.data.length ? 'first item disabled' : 'next item'}>下一页</a>
        <a href="#" onClick={this.handleLast} className={this.state.pageNum === this.state.data.length ? 'first item disabled' : 'last item'}>尾页</a>
        <div className="total item">
          {this.state.pageNum} / {this.state.data.length}
        </div>
      </div>
    );
  }
}

export default Pager;