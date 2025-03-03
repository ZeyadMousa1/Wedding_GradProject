import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header>
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <!-- Start Nav --> */}
            <nav className="navbar navbar-expand-lg bg-transparent mt-3">
              <div className="container-fluid">
                <a className="navbar-brand" href="Index.html"><img src="Images/logo/rings.png" alt="" width="30" height="30"
                    className="me-2" />Wedding Wizz</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                  aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link active" aria-current="page" to="home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="Halls.html">Halls</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                    </li>
                  </ul>
                  <button className="btn rounded-5" type="submit">
                    Log in
                  </button>
                  <button className="btn ms-3 rounded-5" type="submit">
                    Register
                  </button>
                </div>
              </div>
            </nav>
            {/* <!-- End Nav -->
            <!-- Header-content --> */}
            <div className="header_content d-block w-100">
              <div className="content">
                <h1 className="my-5">
                  Experience the Magic of Seamless Planning
                </h1>
                <p className="my-5">
                  Where Every Detail is Designed to Make Your Day
                  Extraordinary
                </p>
              </div>

              <div className="header_image my-5">
                <div className="container my-5">
                  <div className="row">
                    <div className="col-6">


                      <img src="Images/header_images/1.jpg" alt="" height="100" width="100" className="image_1" />
                      <img src="Images/header_images/2.jpg" alt="" height="100" width="100" className="image_2" />
                      <img src="Images/header_images/3.jpg" alt="" height="100" width="100" className="image_3" />
                      <img src="Images/header_images/4.jpg" alt="" height="100" width="100" className="image_4" />
                      <img src="Images/header_images/5.jpg" alt="" height="100" width="100" className="image_5" />
                    </div>
                    <div className="col-6">
                      <div className="last d-flex">
                        <span className="mx-4">2K+</span>
                        <p>Varius sed lacus viverra magna commodo nec diam</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

    </div>
  )
}

export default Header