import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShopList extends Component {

    render() {
        const { title, imgSrc, id } = this.props.info.item;
        // const { changeAmount, sendAmount, index } = this.props;

        return (
            <div className='content-item'>
                <div className='content-item-info'>
                    <div className='title'>
                        <p>{title}</p>
                    </div>
                    <img src={imgSrc} alt="img" />
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        info: state
    }
}

export default connect(mapStateToProps)(ShopList);
