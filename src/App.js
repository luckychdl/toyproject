
import { useState } from 'react';
import { createContext } from 'react';
import { Route } from 'react-router-dom';
import GlobalStyle from './components/globalStyles/global';
import Main from './components/mainHome/mainPage';
import ProductList from './components/productList/productList';
import SignInPage from './components/signIn/signIn';
import SignUpPage from './components/signUp/signUp';
import UpdatePW from './components/updatePW/updatePW';


export const GlobalContext = createContext([])
function App() {
  const [filter, setFilter] = useState([])
  const [check, setCheck] = useState([])
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const value = {
    accessToken:accessToken,
    setAccessToken:setAccessToken,
    refreshToken:refreshToken,
    setRefreshToken:setRefreshToken,
    filter: filter,
    setFilter: setFilter,
    check: check,
    setCheck: setCheck
  }
  return (
    <GlobalContext.Provider value={value}>
      <div className="App">
        <GlobalStyle />
        <Route path="/" exact={true} component={SignInPage} />
        <Route path="/signIn" component={SignInPage} />
        <Route path="/signUp" component={SignUpPage} />
        <Route path="/updatePW" component={UpdatePW} />
        <Route path="/main" component={Main} />
        <Route path="/product" component={ProductList} />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
