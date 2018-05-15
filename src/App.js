import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Main from './components/Main';
import './App.scss';
import ShopList from './components/Shop-list';

const history = createBrowserHistory();

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      shopItems: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response=>response.json())
    .then(parsedJSON=>parsedJSON.slice(0, 9).map(item=>{
      return {
        title: item.title,
        imgSrc: item.thumbnailUrl,
        id: item.id
      }
    }))
    .then(shopItems=> this.setState({
      shopItems,
      isLoading: false
    })
  )
    .catch(error => console.log(error));
  }

  render() {
    const { isLoading, shopItems } = this.state;
    return (
      <Router history={history}>
        <Switch>
          <Provider store={store}>
            <div className="App">
              {isLoading && <h2 style={{ textAlign: 'center' }}>Loading</h2>}
              <Route exact path={process.env.PUBLIC_URL + '/'} component={()=><Main shopItems={shopItems} />} />
              <Route exact path={process.env.PUBLIC_URL + '/shop-list'} component={()=><ShopList/>} />

            </div>
          </Provider>
        </Switch>
      </Router>
    );
  }
}

export default App;