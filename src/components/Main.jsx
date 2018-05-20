import React, { Component } from 'react';
import SingleItem from './Single-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPurchase, fetchItems } from '../actions';
import { Link } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
        }
    }

    componentDidMount () {
        const { items, fetchItems } = this.props;
        if(!items.length) fetchItems();
    }

    sendAmount (index) {
        if(this.state.amount) this.props.addPurchase(this.props.items[index], this.state.amount);
    }

    changeAmount (amount) {
        this.setState({
            amount 
        })
    }

    render() {
        const { purchases, items } = this.props;
        return (
            <div className='main'>
                <header className='header'>
                    {/* <Link to={process.env.PUBLIC_URL + '/shop'}><p>Shop</p></Link> */}
                    <div className='total-purchase'>
                        <Link to={process.env.PUBLIC_URL + '/shop-list'}>
                            <span className='shopping-basket'> Total: {purchases.length} </span>
                        </Link>
                    </div>
                </header>
                <h1 style={{ textAlign: 'center' }}>Catalog</h1>
                {
                    items.length ?
                        <div className='main-content'>
                            {items.map((item, index) => {
                                return (
                                    <SingleItem key={index} item={item} index={index}
                                        sendAmount={this.sendAmount.bind(this)}
                                        changeAmount={this.changeAmount.bind(this)}
                                    />
                                )
                            })}
                        </div>
                        :
                        <h2 style={{ textAlign: 'center' }}>Loading...</h2>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { isFetching, items } = state.shopItems;
    const { purchases } = state;
    return {
        isFetching,
        items,
        purchases
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addPurchase, fetchItems }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);