import React, { Children } from 'react'
import "./button.css"

const Button = ({ children, onClick }) => {
    return (
        <button className='button-value' onClick={onClick}>{children}</button>
    )
}

export default Button