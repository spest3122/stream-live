import React, { useState } from 'react'
import './App.scss';
import { renderRoutes } from 'react-router-config';
import CentralContext from './tool/central' 


function App({ route }) {
  const [ authData, setAuthData ] = useState({
    name: '',
    isLogin: false
  })

  const setUpAuthData = (data) => {
    setAuthData({name: data.name, isLogin: true});
  }

  const data = {
    authData,
    setUpAuthData
  }

  return (
    <div className="App">
      <CentralContext.Provider value={data}>
        {renderRoutes(route.routes)}
      </CentralContext.Provider>
    </div>
  );
}

export default App;
