import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import WelcomePage from './components/welcome-page/welcome-page';
import LoginPage from './components/login-page/login-page';
import RegisterPage from './components/register-page/register-page';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={WelcomePage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/register' component={RegisterPage}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
