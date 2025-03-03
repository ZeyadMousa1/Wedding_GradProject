import React from 'react'

function Contactus() {
  return (
    <div>

<section id="Contact_us">
        <div class="contactus">
            <div class="container">
                <div class="row my-3">
                    <div class="col-md-6">
                        <div>
                            <h2 class="my-5">Handling the stress so your event is a success </h2>
                            <p>Sed lectus ultricies id id massa tellus. Gravida ullamcorper lectus vitae tristique
                                cursus tempor rutrum</p>
                            <div class="contact row m-3">
                                <div class="col-md-6 my-5">
                                    <div class="d-flex align-items-center">
                                        <i class="fa-solid fa-phone"></i>
                                        <div class="mx-4">
                                            <p>phone</p>
                                            <p>(+20)1234567891</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 my-5">
                                    <div class="d-flex align-items-center">
                                        <i class="fa-regular fa-envelope"></i>
                                        <div class="mx-4">
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
                    <div class="col-md-6 bg-light mt-5 p-5">
                        <div>
                            <h3>Send Us a message</h3>
                            <p>Sed lectus ultricies id id massa tellus. Gravida ullamcorper lectus vitae tristique
                                cursus tempor rutrum</p>
                            <div class="form">
                                <form action="">
                                    <div class="form-floating my-3">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Name"
                                            required/>
                                        <label for="floatingInput">Name</label>
                                    </div>
                                    <div class="form-floating my-3">
                                        <input type="email" class="form-control" id="floatingPassword"
                                            placeholder="Email" required/>
                                        <label for="floatingPassword">Email</label>
                                    </div>
                                    <div class="form-floating my-3">
                                        <input type="number" class="form-control" id="floatingPassword"
                                            placeholder="number" required/>
                                        <label for="floatingPassword">number</label>
                                    </div>
                                    <div class="form-floating my-3">
                                        <input type="text" class="form-control" id="floatingPassword"
                                            placeholder="Subject" required/>
                                        <label for="floatingPassword">Subject</label>
                                    </div>
                                    <div class="form-floating my-3">
                                        <textarea class="form-control" placeholder="Leave a comment here"
                                            id="floatingTextarea2" style={{height:'100px'}} ></textarea>
                                        <label for="floatingTextarea2">Comments</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-lg mt-5"><i
                                            class="fa-regular fa-envelope me-3"></i>send message</button>
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