import React from 'react'
import "./input.css"

const CustomInput = ({ name, type, onChange, value, placeholder }) => {
    return (
        <input placeholder={placeholder} className='input-value' name={name} type={type} value={value} onChange={onChange} />
    )
}

export default CustomInput