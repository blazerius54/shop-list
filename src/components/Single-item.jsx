import React, { Component } from 'react';


class SingleItem extends Component {

    render() {
        const { title, imgSrc } = this.props.item;
        return (
            <div className='content-item'>
                <figure>
                    <div className='content-item-info'>
                        <div className='xx'>
                            <p>{title}</p>
                        </div>
                        <img src={imgSrc} alt="img" />
                    </div>
                    <form 
                    className='content-item-options'
                    onSubmit={
                            (e)=>{
                                e.preventDefault();
                                this.props.setTotalAmount(this.inputAmount.value);
                                e.target.reset();
                            }
                        }
                    >
                        <button>
                            <p>Buy</p>
                        </button>
                        <input 
                        type='number' 
                        placeholder='amount' 
                        ref={ref => {
                            this.inputAmount = ref;
                        }}
                        />
                    </form>
                </figure>
            </div>
        )
    }
}

export default SingleItem;