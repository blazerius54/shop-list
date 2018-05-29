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

    componentDidMount() {
        this.setState({
            amount: this.props.item.amount
        })
    }

    render() {
        const { imgSrc, title, amount, id } = this.props.item;
        const { deletePurchase, editPurchase, index } = this.props;
        const { isEditing } = this.state;
        return (
            <tr className='table-content-title'>
                <td><img src={imgSrc} alt="img" /></td>
                <td>{title}</td>
                <td>
                    {
                        isEditing ?
                            <form 
                            className='content-item-options'
                            onSubmit={
                                (e) => {
                                    this.setState({isEditing: false});              
                                    e.preventDefault();
                                    editPurchase(this.state.amount, index)
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
                                <button><p>Buy</p></button>
                            </form> :
                            <p onClick={()=>this.setState({isEditing: true})}>{amount}</p>
                    }
                </td>
                <td className='delete' onClick={() => deletePurchase(id, index)}>x</td> 
            </tr>
        )
    }
}

export default ListItem;