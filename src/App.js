import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import SingleItem from './components/Single-item';
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
          {/* <button
            onClick={() => {
              fetch('https://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then(parsedJSON => parsedJSON.slice(0, step + 20).map(item => {
                  return {
                    title: item.title,
                    imgSrc: item.thumbnailUrl
                  }
                }))
                .then(arr => this.setState({
                  arr,
                  step: step + 20,
                  isLoading: false
                }))
            }}
          >click</button> */}
          {isLoading && <p>Loading</p>}
          <Main shopItems={shopItems}/>
          {/* <div className='main-content'>
            {
              this.state.arr.map((item, index) => {
                return (
                  <SingleItem key={index} item={item}/>
                )
              })
            }
          </div> */}
        </div>
      </Provider>

    );
  }
}

export default App;
