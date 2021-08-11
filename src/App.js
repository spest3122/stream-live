import React, { useState } from 'react'
import './App.scss';
import { renderRoutes } from 'react-router-config';
import CentralContext from './tool/central'
import PendingRouteLoader from './routes/loader'


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
        <PendingRouteLoader routes={route.routes}>
        {renderRoutes(route.routes)}
        </PendingRouteLoader>
      </CentralContext.Provider>
    </div>
  );
}

export default App;
