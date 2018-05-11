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
        const { totalAmount, setTotalAmount } = this.props;
        return (
            <div className='main'>
                <div className='total-purchase'>
                    <span className='shopping-basket'> Total: {totalAmount} </span>
                </div>
                <div className='main-content'>
                    {
                        this.props.shopItems.map((item, index) => {
                            return (
                                <SingleItem key={index} item={item} setTotalAmount={setTotalAmount} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        totalAmount: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setTotalAmount }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
