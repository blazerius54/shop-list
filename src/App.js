import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      step: 20,
      arr: [],
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
    .then(arr=> this.setState({
      arr,
      isLoading: false
    }))
  }

  render() {
    const { step, isLoading } = this.state;
    return (
      <div className="App">
        <button
          onClick={() => {
            fetch('https://jsonplaceholder.typicode.com/photos')
              .then(response => response.json())
              .then(parsedJSON => parsedJSON.slice(0, step+20).map(item => {
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
        >click</button>
        { isLoading && <p>Loading</p> }
        <div className='main-content'>
          {
            this.state.arr.map((item, index) => {
              return (
                <div key={index} className='content-item'>
                  {/* <h2>{item.title}</h2> */}
                  <figure>
                  <div className='content-item-info'>
                    <div className='xx'>
                      <p>
                        {item.title}
                      </p>
                    </div>
                  <img src={item.imgSrc} alt="" />
                  </div>
                  <div className='content-item-options'>
                    <p>Buy</p>
                    <input type="text" placeholder='amount'/>
                  </div>
                </figure>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
