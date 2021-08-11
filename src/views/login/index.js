import Logo from '../../static/image/free-logo.png'
import React, { useContext } from 'react'
import CentralContext from '../../tool/central'
import { FaAngleLeft, FaUser, FaUserShield } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';
import './login.scss'
import Input from './common/input'
import Button from './common/button'

const Login = props => {
    const history = useHistory();
    const { isLogin, toggleIsLogin } = useContext(CentralContext)
    if(isLogin){
        history.goBack();
    }
    return (
        <main className="login-page">
            <header className="login-page-header">
                <FaAngleLeft 
                    onClick={() => history.goBack()}
                    className="login-page-header-back"
                />
            </header>
            <main className="login-page-content">
                <div className="login-page-logo">
                    <img src={Logo} alt="logo" style={{height: '100%', width: '100%'}} />
                </div>
                <div className="login-page-inputs">
                    <Input 
                        CustomIcon={()=> <FaUser className="input-icon" />} 
                        type="text"
                    />
                    <Input 
                        CustomIcon={()=> <FaUserShield className="input-icon" />} 
                        type="password"
                    />
                </div>
                <div className="login-page-buttons">
                    <Button buttonName="Register" bgColor="button-color-info"/>
                    <Button buttonName="Login" bgColor="button-color-primary" loginFun={() => toggleIsLogin()}/>
                </div>
            </main>
        </main>
        
    )
}

export default Login