import React, { Component } from 'react';

class SingleItem extends Component {

    render() {
        const { title, imgSrc, id } = this.props.item;
        const { changeAmount, sendAmount, index } = this.props;

        return (
            <div className='content-item'>
                <figure>
                    <div className='content-item-info'>
                        <div className='title'>
                            <p>{title}</p>
                        </div>
                        <img src={imgSrc} alt="img" />
                    </div>
                    <form 
                    className='content-item-options'
                    onSubmit={
                            (e)=>{
                                e.preventDefault();
                                sendAmount(index);
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
                        // ref={ref => {
                        //     this.inputAmount = ref;
                        // }}
                        onChange={(e)=>changeAmount(e.target.value)}
                        />
                    </form>
                </figure>
            </div>
        )
    }
}

export default SingleItem;