import logo from './logo.svg';
import './App.css';
import { renderRoutes } from 'react-router-config';
import {useHistory} from 'react-router-dom';


function App({ route }) {
  const history = useHistory();
  const goLobby = () => {
    history.push('/')
  }
  const goMain = () => {
    history.push('/main')
  }
  const goLogin = () => {
    history.push('/login')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-switch">
          <button onClick={goLobby}>Lobby</button>
          <button onClick={goMain}>Main</button>
          <button onClick={goLogin}>Login</button>
        </div>
        {renderRoutes(route.routes)}
      </header>
    </div>
  );
}

export default App;
