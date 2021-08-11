import Logo from '../../../static/image/free-logo.png'
import React from 'react'
import { FaUser } from 'react-icons/fa'

const Header = props => {
    const { onGoLogin, authData } = props
    return (
        <header className="header">
            <div className="header-logo">
                <img src={Logo} alt="logo" style={{height: '100%', width: '100%'}} />
            </div>
            <div className="header-right">
                {authData.isLogin ?
                    <p className="header-text">{'Hello! ' + authData.name}</p>
                : 
                <FaUser 
                    className="header-icon"
                    onClick={onGoLogin}
                />
                }
                
            </div>
            
        </header>
    )
}

export default Header