import React from 'react'
// import "./App.css"
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {
  return (
    <>
      {/* <div className='my-1 App-header border border-3'>
        <li className='fw-bold justify-content-center'> <span style={{ color: `red` }} id="amount"><img src="./image/cart4.png" alt="error" /></span> </li>

        <ul className=' '>
          <li className='fw-bold '><NavLink to="/">Home</NavLink></li>
          <li className='fw-bold'><NavLink to="/books" >Books</NavLink></li>
          <li className='fw-bold'><NavLink to="/smartphone" >Smarphone</NavLink></li>
          <li className='fw-bold'><NavLink to="/accessories" >Accessories</NavLink></li>
        </ul>
      </div> */}

      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand fs-2 fw-bold"> <NavLink  to='/'>Home </NavLink></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fs-2 fw-bold" aria-current="page" href="#"><NavLink to="/books">Indian</NavLink></a>
              </li>
              <li className="nav-item">
              <a className="nav-link active fs-2 fw-bold" aria-current="page" href="#"><NavLink to="/smartphone">Italian</NavLink></a>
              </li>
              <li className="nav-item">
              <a className="nav-link active fs-2 fw-bold" aria-current="page" href="#"><NavLink to="/accessories">Chinease</NavLink></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
