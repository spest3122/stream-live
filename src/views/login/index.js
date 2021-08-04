import React, { useContext } from 'react'
import CentralContext from '../../tool/central' 

const Login = props => {
    const loginContext = useContext(CentralContext)
    return (
        <div>
            {loginContext.isLogin.toString()}
            <button onClick={loginContext.toggleIsLogin}>ddd</button>
        </div>
        
    )
}

export default Login