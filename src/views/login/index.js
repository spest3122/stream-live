import React, { useContext } from 'react'
import CentralContext from '../../tool/central'
import './login.scss'

const Login = props => {
    const { isLogin, toggleIsLogin } = useContext(CentralContext)
    return (
        <main className="login-page">
            <header className="login-page-header">
                <button>{'<'}</button>
            </header>
            <main className="login-page-content">
                <div className="login-page-inputs">
                    <input className="login-page-input" />
                    <input className="login-page-input" />
                </div>
                <div className="login-page-buttons">
                    <button>cancel</button>
                    <button>login</button>
                </div>
            </main>
        </main>
        
    )
}

export default Login