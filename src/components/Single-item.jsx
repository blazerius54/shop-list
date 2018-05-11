import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTotalAmount } from '../actions';

class SingleItem extends Component {

    render() {
        const { title, imgSrc } = this.props.item;
        return (
            <div className='content-item'>
                <figure>
                    <div className='content-item-info'>
                        <div className='xx'>
                            <p>
                                {title}
                            </p>
                        </div>
                        <img src={imgSrc} alt="" />
                    </div>
                    <div className='content-item-options'>
                        <button>
                            <p>Buy</p>
                        </button>
                        <input type="text" placeholder='amount' />
                    </div>
                </figure>
            </div>
        )
    }
}

// export default SingleItem;

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ setTotalAmount }, dispatch)
}

export default connect(null, mapDispatchToProps)(SingleItem);
