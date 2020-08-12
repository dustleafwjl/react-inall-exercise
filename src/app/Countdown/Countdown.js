import React from 'react';
import {Link} from "react-router-dom"
import './countdown.module.less';

const Countdown = () => {
  return (
  <div className="countdown">
    <header>在线倒计时器</header>
    <main>
      <div>
        <div className="set-time">
          <label>设置时间</label>
          <input></input>
        </div>
        <div className="ctr-btn">
          <div>Start</div>
          <div style={{display: "none"}}>End</div>
        </div>
      </div>
      <div>
        {42}
        Seconds
      </div>
    </main>
    <footer>
      <Link to="/">回到主页</Link>
    </footer>
  </div>);
};

export default Countdown;