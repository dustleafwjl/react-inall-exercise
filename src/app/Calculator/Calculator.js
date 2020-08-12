import React from 'react';
import {Link} from 'react-router-dom'
import './calculator.module.less';

class Calculator extends React.Component  {
  state = {
    number: ''
  }
  addStrToNum = (str) => {
    this.setState({number: this.state.number + str});
  }
  clearStr = () => {
    this.setState({number: ''});
  }
  getResult = () => {
    let str = this.state.number;
    this.setState({number: eval(str.replace(/x/, '*'))});
  }
  render() {
    return (
      <div className="calculator">
        <header>在线计算器</header>
        <main>
          <div>
            <div className="input">{this.state.number}</div>
          </div>
          <div>
            <div className="key yellow" onClick={() => this.addStrToNum('+')}>+</div>
            <div className="key yellow" onClick={() => this.addStrToNum('-')}>-</div>
            <div className="key yellow" onClick={() => this.addStrToNum('x')}>x</div>
          </div>
          <div>
            <div className="key" onClick={() => this.addStrToNum('7')}>7</div>
            <div className="key" onClick={() => this.addStrToNum('8')}>8</div>
            <div className="key" onClick={() => this.addStrToNum('8')}>9</div>
          </div>
          <div>
            <div className="key" onClick={() => this.addStrToNum('4')}>4</div>
            <div className="key" onClick={() => this.addStrToNum('5')}>5</div>
            <div className="key" onClick={() => this.addStrToNum('6')}>6</div>
          </div>
          <div>
            <div className="key" onClick={() => this.addStrToNum('1')}>1</div>
            <div className="key" onClick={() => this.addStrToNum('2')}>2</div>
            <div className="key" onClick={() => this.addStrToNum('3')}>3</div>
          </div>
          <div>
            <div className="key" onClick={() => this.addStrToNum('0')}>0</div>
            <div className="key clear" onClick={this.clearStr}>clear</div>
            <div className="key equal" onClick={this.getResult}>=</div>
          </div>
        </main>
        <footer>
          <Link to="/">回到主页</Link>
        </footer>
      </div>);
  }
};

export default Calculator;