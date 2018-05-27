import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { deletePurchase } from '../actions';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
    }

    render() {
        const { imgSrc, title, amount, id } = this.props.item;
        const { deletePurchase } = this.props;
        return (
            <tr className='table-content-title'>
                <td><img src={imgSrc} alt="img" /></td>
                <td>{title}</td>
                <td onClick={()=>this.setState({isEditing: !this.state.isEditing})}>
                    {/* {   
                        this.state.isEditing?
                        <input /> :
                        amount
                    } */}
                    <input
                        type='number'
                        min='1'
                        placeholder='amount'
                        defaultValue={amount}
                        onChange={(e)=>{this.props.editPurchase(e.target.value, id)}}
                    />
                        
                </td>
                <td className='delete' onClick={() => deletePurchase(id, this.props.index)}>x</td>
            </tr>
        )
    }
}


// function mapStateToProps(state) {
//     return {
//         purchases: state.purchases
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ deletePurchase }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
export default ListItem;