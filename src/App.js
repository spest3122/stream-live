import React, { useState } from 'react'
import './App.scss';
import { renderRoutes } from 'react-router-config';
import { useHistory } from 'react-router-dom';
import CentralContext from './tool/central' 


function App({ route }) {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false)

  const toggleIsLogin = () => {
    setIsLogin((prev) => !prev)
  }

  const goLobby = () => {
    history.push('/')
  }
  const goMain = () => {
    history.push('/main')
  }
  const goLogin = () => {
    history.push('/login')
  }
  const goBack = () => {
    history.goBack();
  }
  return (
    <div className="App">
      {/* <div className="App-switch">
        <button onClick={goBack}>GoBack</button>
        <button onClick={goLobby}>Lobby</button>
        <button onClick={goMain}>Main</button>
        <button onClick={goLogin}>Login</button>
      </div> */}
      <CentralContext.Provider value={{ isLogin ,toggleIsLogin }}>
        {renderRoutes(route.routes)}
      </CentralContext.Provider>
    </div>
  );
}

export default App;
