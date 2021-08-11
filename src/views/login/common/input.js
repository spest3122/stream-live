import React from 'react'

const Input = props => {
    const { CustomIcon, type, value, onChange } = props;
    return (
        <div className="login-page-input">
            <CustomIcon />
            <input type={type} value={value && value} onChange={onChange && ((e) => onChange(e.target.value))} />
        </div>
    )
}
export default Input