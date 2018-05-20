import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Main from './components/Main';
import ShopList from './components/Shop-list';
import Header from './components/Header';
import './App.scss';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Provider store={store}>
          <div className="App">
            <Header />
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Main} />
            <Route exact path={process.env.PUBLIC_URL + '/shop-list'} component={() => <ShopList />} />
          </div>
        </Provider>
      </Switch>
    </Router>
  )
}
export default App;