import React from 'react'

const ItemsCart3 = (props) => {
    return (
        <>

            <div className=" mx-1 my-3 ">
                <div className="row">
                    <div className='col col-md-4 col-6'>
                        <h4>{props.product3.Name} <span className="badge text-bg-secondary"><span className='img-height'><img src="./image/rupee.png" alt="erroe" style={{ height: `20px` }} /></span>{props.product3.Price}</span></h4>
                    </div>
                    <div className="col col-md-3 col-6">{props.product3.img}</div>


                    <div className='col col-md-3 col-6'>
                        <div role="group" aria-label="First group">
                            <button type="button" className="btn btn-danger" onClick={() => props.Decrease(props.index)}>-</button>
                            <button type="button" className="btn btn-secondary mx-1">{props.product3.quantity}</button>
                            <button type="button" className="btn btn-success" onClick={() => props.Increase(props.index)}>+</button>
                        </div>

                    </div>
                    <div className="col col-md-2 col-6 ">{props.product3.Price * props.product3.quantity}</div>
                </div>
            </div>

            <hr />
        </>
    )
}

export default ItemsCart3
