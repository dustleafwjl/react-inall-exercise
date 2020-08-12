import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from './index.module.less'


const Nav = () => {
  return (
    <div className="header">
      <NavLink to="/" >HOME</NavLink>
      <NavLink to="/calculator" >在线计算器</NavLink>
      <NavLink to="/countdown" >在线倒计时</NavLink>
    </div>
  )
}


export default Nav;