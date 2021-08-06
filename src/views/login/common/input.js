import React from 'react'

const Input = props => {
    const { CustomIcon, type } = props;
    return (
        <div className="login-page-input">
            <CustomIcon />
            <input type={type}></input>
        </div>
    )
}
export default Input