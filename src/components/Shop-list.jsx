import React from 'react';
import { connect } from 'react-redux';

const ShopList = (props) => {
    const { purchases } = props;

    return (
        <div className='shop-list'>
            <div className='shop-list-content'>
                <h2>Your purchases:</h2>
                {
                    purchases.length >= 1 &&
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


function mapStateToProps(state) {
    return {
        purchases: state.purchases
    }
}

export default connect(mapStateToProps)(ShopList);