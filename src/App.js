
import { Route } from 'react-router-dom';
import GlobalStyle from './components/globalStyles/global';
import Main from './components/mainHome/mainPage';
import SignInPage from './components/signIn/signIn';
import SignUpPage from './components/signUp/signUp';
import UpdatePW from './components/updatePW/updatePW';



function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path="/" exact={true} component={SignInPage} />
      <Route path="/signIn" component={SignInPage} />
      <Route path="/signUp" component={SignUpPage} />
      <Route path="/updatePW" component={UpdatePW} />
      <Route path="/main" component={Main} />
    </div>
  );
}

export default App;
