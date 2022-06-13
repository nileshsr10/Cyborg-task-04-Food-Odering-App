import React from 'react'
import { NavLink } from 'react-router-dom'
import Books from './Indian';
import Navbar from './Navbar'


const Home = () => {


  return (
    <>
    <Navbar />
      <div className='container align-center border border-2 border-light mt-3 ' >
        <h1 className='home text-center position-static' >Order Your Favourite Dish Now</h1>

        <div className="row justify-content-center justify-content-md-between my-2 mx-1" id='Home'>

          <div className="col-10 col-md-4 mt-3">
            <div className="card bg-dark" style={{ width: "15rem" }}>
              <img src="./image/food-1.jpg" className="card-img-top" alt="Error" />
              <div className="card-body">
              <h4 className='text-center'><NavLink to="/smartphone">Italian</NavLink></h4>
              </div>
            </div>
          </div>

          <div className="col-10 col-md-4 mt-3">
            <div className="card bg-dark" style={{ width: "15rem" }}>
              <img src="./image/food-2.jpg" className="card-img-top" alt="Error" />
              <div className="card-body">
               <h4 className='text-center'><NavLink to="/books">Indian</NavLink></h4>
              </div>
            </div>
          </div>

          <div className="col-10 col-md-3 mt-3">
            <div className="card bg-dark" style={{ width: "15rem" }}>
              <img src="./image/food-3.jpg" className="card-img-top" alt="Error" />
              <div className="card-body">
              <h4 className='text-center'><NavLink to="/accessories">Chinease</NavLink></h4>
              </div>
            </div>
          </div>
         
          <div className="col-10 col-md-4 mt-3">
            <div className="card bg-dark" style={{ width: "15rem" }}>
              <img src="./image/food-4.jpg" className="card-img-top" alt="Error" />
              <div className="card-body">
              <h4 className='text-center'><NavLink to="/smartphone">Italian</NavLink></h4>
              </div>
            </div>
          </div>

          <div className="col-10 col-md-4 mt-3">
            <div className="card bg-dark" style={{ width: "15rem" }}>
              <img src="./image/food-5.jpg" className="card-img-top" alt="Error" />
              <div className="card-body">
               <h4 className='text-center'><NavLink to="/books">Indians</NavLink></h4>
              </div>
            </div>
          </div>

          <div className="col-10 col-md-3 mt-3">
            <div className="card bg-dark" style={{ width: "15rem" }}>
              <img src="./image/food-6.jpg" className="card-img-top" alt="Error" />
              <div className="card-body">
              <h4 className='text-center'><NavLink to="/accessories">Chinease</NavLink></h4>
              </div>
            </div>
          </div>
         
          <div className="col-10 col-md-4 mt-3">
            <div className="card bg-dark" style={{ width: "15rem" }}>
              <img src="./image/food-7.jpg" className="card-img-top" alt="Error" />
              <div className="card-body">
              <h4 className='text-center'><NavLink to="/smartphone">Italian</NavLink></h4>
              </div>
            </div>
          </div>

          <div className="col-10 col-md-4 mt-3">
            <div className="card bg-dark" style={{ width: "15rem" }}>
              <img src="./image/food-8.jpg" className="card-img-top" alt="Error" />
              <div className="card-body">
               <h4 className='text-center'><NavLink to="/books">Indians</NavLink></h4>
              </div>
            </div>
          </div>

          <div className="col-10 col-md-3 mt-3">
            <div className="card bg-dark" style={{ width: "15rem" }}>
              <img src="./image/food-9.jpg" className="card-img-top" alt="Error" />
              <div className="card-body">
              <h4 className='text-center'><NavLink to="/accessories">Chinease</NavLink></h4>
              </div>
            </div>
          </div>
         
          <div className="col-10 col-md-4 mt-3">
            <div className="card bg-dark" style={{ width: "15rem" }}>
              <img src="./image/food-10.jpg" className="card-img-top" alt="Error" />
              <div className="card-body">
              <h4 className='text-center'><NavLink to="/smartphone">Italian</NavLink></h4>
              </div>
            </div>
          </div>

          <div className="col-10 col-md-4 mt-3">
            <div className="card bg-dark" style={{ width: "15rem" }}>
              <img src="./image/food-11.jpg" className="card-img-top" alt="Error" />
              <div className="card-body">
               <h4 className='text-center'><NavLink to="/books">Indians</NavLink></h4>
              </div>
            </div>
          </div>

          <div className="col-10 col-md-3 mt-3">
            <div className="card bg-dark" style={{ width: "15rem" }}>
              <img src="./image/food-12.jpg" className="card-img-top" alt="Error" />
              <div className="card-body">
              <h4 className='text-center'><NavLink to="/accessories">Chinease</NavLink></h4>
              </div>
            </div>
          </div>
         


        </div>
      </div>

      <footer>
        <p className='anim text-center py-1'> start Ordering Now and avail discount upto 60%</p>
      </footer>
    </>
  )
}

export default Home
