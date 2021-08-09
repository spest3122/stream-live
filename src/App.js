import React, { useState } from 'react'
import './App.scss';
import { renderRoutes } from 'react-router-config';
import CentralContext from './tool/central' 


function App({ route }) {
  const [isLogin, setIsLogin] = useState(false)

  const toggleIsLogin = () => {
    setIsLogin((prev) => !prev)
  }
  return (
    <div className="App">
      <CentralContext.Provider value={{ isLogin ,toggleIsLogin }}>
        {renderRoutes(route.routes)}
      </CentralContext.Provider>
    </div>
  );
}

export default App;
