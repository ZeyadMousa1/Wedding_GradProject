import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header>
    <div class="hero">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            {/* <!-- Start Nav --> */}
            <nav class="navbar navbar-expand-lg bg-transparent mt-3">
              <div class="container-fluid">
                <a class="navbar-brand" href="Index.html"><img src="Images/logo/rings.png" alt="" width="30" height="30"
                    class="me-2" />Wedding Wizz</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                  aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <NavLink class="nav-link active" aria-current="page" to="home">Home</NavLink>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="Halls.html">Halls</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                      <NavLink class="nav-link" to="/contact">Contact Us</NavLink>
                    </li>
                  </ul>
                  <button class="btn rounded-5" type="submit">
                    Log in
                  </button>
                  <button class="btn ms-3 rounded-5" type="submit">
                    Register
                  </button>
                </div>
              </div>
            </nav>
            {/* <!-- End Nav -->
            <!-- Header-content --> */}
            <div class="header_content d-block w-100">
              <div class="content">
                <h1 class="my-5">
                  Experience the Magic of Seamless Planning
                </h1>
                <p class="my-5">
                  Where Every Detail is Designed to Make Your Day
                  Extraordinary
                </p>
              </div>

              <div class="header_image my-5">
                <div class="container my-5">
                  <div class="row">
                    <div class="col-6">


                      <img src="Images/header_images/1.jpg" alt="" height="100" width="100" class="image_1" />
                      <img src="Images/header_images/2.jpg" alt="" height="100" width="100" class="image_2" />
                      <img src="Images/header_images/3.jpg" alt="" height="100" width="100" class="image_3" />
                      <img src="Images/header_images/4.jpg" alt="" height="100" width="100" class="image_4" />
                      <img src="Images/header_images/5.jpg" alt="" height="100" width="100" class="image_5" />
                    </div>
                    <div class="col-6">
                      <div class="last d-flex">
                        <span class="mx-4">2K+</span>
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