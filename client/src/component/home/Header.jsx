import React from "react";

function Header() {
  return (
    <div>
      <header>
        <div className="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
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
                          <img
                            src="Images/header_images/1.jpg"
                            alt=""
                            height="100"
                            width="100"
                            className="image_1"
                          />
                          <img
                            src="Images/header_images/2.jpg"
                            alt=""
                            height="100"
                            width="100"
                            className="image_2"
                          />
                          <img
                            src="Images/header_images/3.jpg"
                            alt=""
                            height="100"
                            width="100"
                            className="image_3"
                          />
                          <img
                            src="Images/header_images/4.jpg"
                            alt=""
                            height="100"
                            width="100"
                            className="image_4"
                          />
                          <img
                            src="Images/header_images/5.jpg"
                            alt=""
                            height="100"
                            width="100"
                            className="image_5"
                          />
                        </div>
                        <div className="col-6">
                          <div className="last d-flex">
                            <span className="mx-4">2K+</span>
                            <p>
                              Varius sed lacus viverra magna commodo nec diam
                            </p>
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
  );
}

export default Header;
