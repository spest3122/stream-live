import React from 'react'

const Button = props => {
    const { buttonName, bgColor, loginFun } = props
    return (
        <button className={`login-page-button ${bgColor}`} onClick={loginFun}>{buttonName}</button>
    )
}
export default Button