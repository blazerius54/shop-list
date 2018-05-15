import React from 'react';

const SingleItem = (props) => {

    const { title, imgSrc } = props.item;
    const { changeAmount, sendAmount, index } = props;

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
                        (e) => {
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
                        min='1'
                        placeholder='amount'
                        onChange={(e) => changeAmount(e.target.value)}
                    />
                </form>
            </figure>
        </div>
    )
}

export default SingleItem;