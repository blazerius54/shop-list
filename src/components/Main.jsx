import React, { Component } from 'react';
import SingleItem from './Single-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTotalAmount } from '../actions';
import { Link } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            amount: 0
        }
    }

    sendAmount (index) {
        if(this.state.amount) this.props.setTotalAmount(this.props.shopItems[index], this.state.amount);
    }

    changeAmount (amount) {
        this.setState({
            amount 
        })
    }

    render() {
        const { totalAmount, shopItems } = this.props;
        return (
            <div className='main'>
                <header className='header'>
                    {/* <Link to={process.env.PUBLIC_URL + '/shop'}><p>Shop</p></Link> */}
                    <div className='total-purchase'>
                        <Link to={process.env.PUBLIC_URL + '/shop-list'}>
                            <span className='shopping-basket'> Total: {totalAmount.length} </span>
                        </Link>
                    </div>
                </header>
                <h1 style={{ textAlign: 'center' }}>Catalog</h1>
                <div className='main-content'>
                    {
                        shopItems.map((item, index) => {
                            return (
                                <SingleItem key={index} item={item} index={index}
                                sendAmount={this.sendAmount.bind(this)} 
                                changeAmount={this.changeAmount.bind(this)} 
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        totalAmount: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setTotalAmount }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);