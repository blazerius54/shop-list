import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Main from './components/Main';
import './App.scss';
import ShopList from './components/Shop-list';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Provider store={store}>
          <div className="App">
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Main} />
            <Route exact path={process.env.PUBLIC_URL + '/shop-list'} component={() => <ShopList />} />
          </div>
        </Provider>
      </Switch>
    </Router>
  )
}
export default App;