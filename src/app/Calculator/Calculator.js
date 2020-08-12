import React from 'react';
import {Link} from 'react-router-dom'
import './calculator.module.less';

const Calculator = () => {
  return (
  <div className="calculator">
    <header>在线计算器</header>
    <main>
      <div>
        <input></input>
      </div>
      <div>
        <div className="key yellow">+</div>
        <div className="key yellow">-</div>
        <div className="key yellow">x</div>
      </div>
      <div>
        <div className="key">7</div>
        <div className="key">8</div>
        <div className="key">9</div>
      </div>
      <div>
        <div className="key">4</div>
        <div className="key">5</div>
        <div className="key">6</div>
      </div>
      <div>
        <div className="key">1</div>
        <div className="key">2</div>
        <div className="key">3</div>
      </div>
      <div>
        <div className="key">0</div>
        <div className="key clear">clear</div>
        <div className="key equal">=</div>
      </div>
    </main>
    <footer>
      <Link to="/">回到主页</Link>
    </footer>
  </div>);
};

export default Calculator;