import React from 'react';
import SingleItem from './Single-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTotalAmount } from '../actions';

const Main = (props) => {
    const { totalAmount, setTotalAmount, shopItems } = props;
    return (
        <div className='main'>
            <div className='total-purchase'>
                <div>
                    <span className='shopping-basket'> Total: {totalAmount} </span>
                </div>
            </div>
            <h1 style={{textAlign: 'center'}}>Catalog</h1>
            <div className='main-content'>
                {
                    shopItems.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} setTotalAmount={setTotalAmount} />
                        )
                    })
                }
            </div>
        </div>
    );
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