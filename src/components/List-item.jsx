import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { deletePurchase } from '../actions';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            amount: 0
        }
    }

    render() {
        const { imgSrc, title, amount, id } = this.props.item;
        const { deletePurchase } = this.props;
        const { isEditing } = this.state;
        return (
            <tr className='table-content-title'>
                <td><img src={imgSrc} alt="img" /></td>
                <td>{title}</td>
                <td>
                    {
                        isEditing ?
                            <form 
                            onSubmit={
                                (e) => {
                                    this.setState({isEditing: false});              
                                    e.preventDefault();
                                    this.props.editPurchase(this.state.amount, this.props.index)
                                }
                            }>
                                <input
                                    key={amount}
                                    type='number'
                                    min='1'
                                    placeholder='amount'
                                    defaultValue={amount}
                                    // onChange={(e) => { this.props.editPurchase(e.target.value, this.props.index) }}
                                    onChange={(e) => { this.setState({amount: e.target.value}) }}
                                />
                                <button>click</button>
                            </form> :
                            <p onClick={()=>this.setState({isEditing: true})}>{amount}</p>
                    }

                </td>
                <td className='delete' onClick={() => deletePurchase(id, this.props.index)}>x</td>
            </tr>
        )
    }
}


export default ListItem;