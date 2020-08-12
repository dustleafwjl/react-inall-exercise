import React from 'react';
import {Link} from "react-router-dom"
import './countdown.module.less';

class Countdown extends React.Component {

  state = {
    time: '?',
    inputTime: '',
    isEnd: false,
    timer: null
  }

  handleTimeChange = (e) => {
    this.setState({
      inputTime: e.target.value,
      isEnd: false
    })
  }
  setTimer = () => {
    let timer = setInterval(() => {
      this.setState({
        time: this.state.time - 1
      });
      if(this.state.time <= 0) {
        this.end();
      }
    }, 1000);
    this.setState({
      timer
    })
  }
  clearTimer = () => {
    console.log(this.state.timer)
    clearInterval(this.state.timer)
  }
  start = () => {
    this.clearTimer()
    if(!this.state.inputTime) return;
    this.setState({
      time: this.state.inputTime
    })
    this.setTimer()
  }
  end = () => {
    this.setState({
      isEnd: true,
      inputTime: ''
    })
    this.clearTimer()
  }
  render() {
    return (
      <div className="countdown">
        <header>在线倒计时器</header>
        <main>
          <div>
            <div className="set-time">
              <label>设置时间</label>
              <input value={this.state.inputTime} onChange={this.handleTimeChange}></input>
            </div>
            <div className="ctr-btn">
              {
                this.state.isEnd ? <div onClick={this.end}>End</div> : <div onClick={this.start}>Start</div>
              }
            </div>
          </div>
          <div>
            {this.state.time}
            <span>Seconds</span>
          </div>
        </main>
        <footer>
          <Link to="/">回到主页</Link>
        </footer>
      </div>);
  }
};

export default Countdown;