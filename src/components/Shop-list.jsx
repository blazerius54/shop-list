import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editPurchase, deletePurchase } from '../actions';
import ListItem from './List-item';

const ShopList = (props) => {
    const { purchases } = props;
    return (
        <div className='shop-list'>
            <div className='shop-list-content'>
                <h2>Your purchases:</h2>
                {
                    purchases.length >= 1 ?
                    <table>
                        <tbody>
                            <tr>
                                <th>Image</th>
                                <th>Info</th>
                                <th>Amount</th>
                            </tr>
                            {
                                purchases.map((item, index) => {
                                    return <ListItem key={index} index={index} item={item} deletePurchase={props.deletePurchase} editPurchase={props.editPurchase}/>
                                })
                            }
                        </tbody>
                    </table> :
                    <p>No purchases yet</p>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({editPurchase, deletePurchase}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);