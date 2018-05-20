import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ShopList extends Component {

    render() {
        const { purchases } = this.props;

        return (
            <div className='shop-list'>
                <Link to={process.env.PUBLIC_URL + '/'}>
                    <span className='shopping-basket'> Back to the shop</span>
                </Link>
                <div className='shop-list-content'>
                    <h2>Your purchases:</h2>
                    {
                        purchases.length>=1 && 
                        <table>
                            <tbody>
                                <tr>
                                    <th>Image</th>
                                    <th>Info</th>
                                    <th>Amount</th>
                                </tr>
                                {
                                    purchases.map((item, index) => {
                                        return (
                                            <tr className='table-content-title' key={index}>
                                                <td><img src={item.imgSrc} alt="img" /></td>
                                                <td >{item.title}</td>
                                                <td>{item.amount}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        purchases: state.purchases
    }
}

export default connect(mapStateToProps)(ShopList);
