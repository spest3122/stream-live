import React from 'react'

const Button = props => {
    const { buttonName, bgColor } = props
    return (
        <button className={`login-page-button ${bgColor}`}>{buttonName}</button>
    )
}
export default Button