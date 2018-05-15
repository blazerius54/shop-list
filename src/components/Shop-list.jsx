import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShopList extends Component {

    render() {
        // const { title, imgSrc, id } = this.props.info.item;
        // const { changeAmount, sendAmount, index } = this.props;
        const { purchases } = this.props;

        return (
            <div className='content-item'>
                {
                    purchases.map((item, index)=>{
                        return (
                            <div className='content-item-info' key={index}>
                                <div className='title'>
                                    <p>{item.title}</p>
                                    <p>{item.amount}</p>
                                </div>
                                <img src={item.imgSrc} alt="img" />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        purchases: state
    }
}

export default connect(mapStateToProps)(ShopList);
