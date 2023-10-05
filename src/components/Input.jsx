import React from 'react'
import style from './Input.module.css'

const Input = ({ id, label, setValue, ...props }) => {
    return (
        <>
            <label style={style.label} htmlFor={id}>{label}</label>
            <input
                id={id}
                name={id}
                onChange={({ target }) => setValue(target.value)}
                {...props}
            />
        </>
    );
};


export default Input