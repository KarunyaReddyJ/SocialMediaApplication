import {useState} from 'react'
import './App.css';
import LoginPage from './components/Login';
import Main from './components/Main';
import RegisterPage from './components/Register';

function App() {
  const [Logged, setLogged] = useState((isNaN(parseInt(sessionStorage.getItem('login'))))?false:parseInt(sessionStorage.getItem('login')));
  const [haveAccount, setHaveAccount] = useState(true);
  return (
    <div className="App">
      {Logged?<Main/>: haveAccount? <LoginPage setLogged={setLogged} setHaveAccount={setHaveAccount} />: <RegisterPage setLogged={setLogged} setHaveAccount={setHaveAccount} /> }
    </div>
  );
}

export default App;
