import React from 'react'
import {Link} from 'react-router-dom'
import s from "../Styles/Nav.module.css";
export const Nav = () => {
  return (
    <div className={s.container}>
      <ul>
        <Link to={'/'} className={s.op} >Character</Link>
        <Link to={'/comics'} className={s.op}>Comics</Link>
      </ul>
    </div>
  )
}
