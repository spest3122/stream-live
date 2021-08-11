import Logo from '../../static/image/free-logo.png'
import React, { useState, useContext } from 'react'
import CentralContext from '../../tool/central'
import { FaAngleLeft, FaUser, FaUserShield } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';
import './login.scss'
import Input from './common/input'
import Button from './common/button'

const Login = props => {
    const history = useHistory();
    const { authData, setUpAuthData } = useContext(CentralContext)
    const [ acc, setAcc ] = useState('')
    if(authData.isLogin){
        history.goBack();
    }

    const send = () => {
        if(acc === ''){
            alert('請輸入帳號');
            return;
        }
        setUpAuthData({name: acc})
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
                        value={acc}
                        onChange={setAcc}
                    />
                    <Input 
                        CustomIcon={()=> <FaUserShield className="input-icon" />} 
                        type="password"
                    />
                </div>
                <div className="login-page-buttons">
                    <Button buttonName="Register" bgColor="button-color-info"/>
                    <Button buttonName="Login" bgColor="button-color-primary" loginFun={() => send()}/>
                </div>
            </main>
        </main>
        
    )
}

export default Login