import React, { Component } from 'react';
import SingleItem from './Single-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTotalAmount } from '../actions';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 20,
            arr: [],
            isLoading: true
        }
    }

    render() {
        return (
            <div className='main-content'>
                {
                    this.props.shopItems.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} setTotalAmount={this.props.setTotalAmount}/>
                        )
                    })
                }
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ setTotalAmount }, dispatch)
}

export default connect(null, mapDispatchToProps)(Main);
