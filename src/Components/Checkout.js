import React from 'react'

const Checkout = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3 fs-3 fw-bolder">Amount</div>
          <div className="col-6 col-md-3 fs-3 fw-bolder">{props.AmountTotle2}</div>
          <div className="col-6 col-md-2">
            <button type="button" className="btn btn-danger" onClick={() => props.reset(props.index)}>Reset</button>
          </div>
          <div className="col-6 col-md-1">
            <button type="button" className="btn btn-success" >CheckOut</button>
          </div>
          <div className="col-3"> {props.AmountTotle}</div>
        </div>
      </div>
    </>
  )
}

export default Checkout
