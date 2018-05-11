import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Main from './components/Main';
import './App.scss';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      step: 20,
      shopItems: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response=>response.json())
    .then(parsedJSON=>parsedJSON.slice(0, 20).map(item=>{
      return {
        title: item.title,
        imgSrc: item.thumbnailUrl
      }
    }))
    .then(shopItems=> this.setState({
      shopItems,
      isLoading: false
    }))
  }

  render() {
    const { step, isLoading, shopItems } = this.state;
    return (
      <Provider store={store}>
        <div className="App">
          {isLoading && <h2 style={{textAlign: 'center'}}>Loading</h2>}
          <Main shopItems={shopItems}/>
        </div>
      </Provider>

    );
  }
}

export default App;
