import React from 'react'
import style from './Button.module.css'

const Button = ({texto, value, setValue}) => {
  return (
    <button 
    className={style.button}
    onClick={() => {
      setValue(!value)
    }}
    >
      <p>{texto}</p>
    </button>
  )
}

export default Button
