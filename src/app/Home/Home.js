import React from 'react';
import { Link } from 'react-router-dom'
import './home.less';

import calculatorLogo from '../../images/calculator.png'
import timerLogo from '../../images/timer.png'
import heroLogo from '../../images/hero-image.png'

const Home = () => {
  return (
  <div className="home">
    <section className="home-image">
      <img src={heroLogo}></img>
      <div></div>
      <div>在线实用工具</div>
    </section>
    <section className="home-link">
      <div>
        <img src={calculatorLogo}></img>
        <div>
          <Link to="/calculator">计算器</Link>
        </div>
      </div>
      <div>
        <img src={timerLogo}></img>
        <div>
          <Link to="/countdown">倒计时器</Link>
        </div>
      </div>
    </section>
  </div>
  );
};

export default Home;