import React from 'react'

function Contactus() {
return (
    <div>

<section id="Contact_us">
        <div className="contactus">
            <div className="container">
                <div className="row my-3">
                    <div className="col-md-6">
                        <div>
                            <h2 className="my-5">Handling the stress so your event is a success </h2>
                            <p>Sed lectus ultricies id id massa tellus. Gravida ullamcorper lectus vitae tristique
                                cursus tempor rutrum</p>
                            <div className="contact row m-3">
                                <div className="col-md-6 my-5">
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-phone"></i>
                                        <div className="mx-4">
                                            <p>phone</p>
                                            <p>(+20)1234567891</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 my-5">
                                    <div className="d-flex align-items-center">
                                        <i className="fa-regular fa-envelope"></i>
                                        <div className="mx-4">
                                            <p>Email</p>
                                            <p>WeddingWizz@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="Images/contactus/_R5A5846.jpg" alt="contactus" width="80%" height="415"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 bg-light mt-5 p-5">
                        <div>
                            <h3>Send Us a message</h3>
                            <p>Sed lectus ultricies id id massa tellus. Gravida ullamcorper lectus vitae tristique
                                cursus tempor rutrum</p>
                            <div className="form">
                                <form action="">
                                    <div className="form-floating my-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Name"
                                            required/>
                                        <label>Name</label>
                                    </div>
                                    <div className="form-floating my-3">
                                        <input type="email" className="form-control" id="floatingPassword"
                                            placeholder="Email" required/>
                                        <label>Email</label>
                                    </div>
                                    <div className="form-floating my-3">
                                        <input type="number" className="form-control" id="floatingPassword"
                                            placeholder="number" required/>
                                        <label>number</label>
                                    </div>
                                    <div className="form-floating my-3">
                                        <input type="text" className="form-control" id="floatingPassword"
                                            placeholder="Subject" required/>
                                        <label>Subject</label>
                                    </div>
                                    <div className="form-floating my-3">
                                        <textarea className="form-control" placeholder="Leave a comment here"
                                            id="floatingTextarea2" style={{height:'100px'}} ></textarea>
                                        <label>Comments</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg mt-5"><i
                                            className="fa-regular fa-envelope me-3"></i>send message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        
    </div>
  )
}

export default Contactus