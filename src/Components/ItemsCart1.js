import React from 'react'

const ItemsCart1 = (props) => {
    // console.log(props.product1)
    return (
        <>
            <div className=" mx-1 my-3 ">
                <div className="row">
                        <div className='col col-md-4 col-6'>
                            <h4>{props.product1.Name} <span className="badge text-bg-secondary"><span className='img-height'><img src="./image/rupee.png" alt="erroe" style={{ height: `20px` }} /></span>{props.product1.Price}</span></h4>
                        </div>
                        <div className="col col-md-3 col-6">{props.product1.img}</div>
             

                    <div className='col col-md-3 col-6'>
                        <div role="group" aria-label="First group">
                            <button type="button" className="btn btn-danger" onClick={()=> props.Decrease(props.index)}>-</button>
                            <button type="button" className="btn btn-secondary mx-1">{props.product1.quantity}</button>
                            <button type="button" className="btn btn-success" onClick={() => props.Increase(props.index)}>+</button>
                        </div>

                    </div>
                    <div className="col col-md-2 col-6 ">{props.product1.Price * props.product1.quantity}</div>
                </div>
            </div>
            <hr />

        </>
    )
}

export default ItemsCart1
