import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.header}>
      <h3 className={style.logo}>I am Ali</h3>
        <button className={style.btn}>login</button>
    </div>
  )
}

export default Header
