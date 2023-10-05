import React from 'react'
import style from './Button.module.css'

const Button = ({texto}) => {
  return (
    <button className={style.button}>
      <p>{texto}</p>
    </button>
  )
}

export default Button
