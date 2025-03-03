<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import './Navbar.css'
=======
import "../../images/rings.png"
import img1 from '../../images/rings.png'


>>>>>>> 34594467ee4c0abf5f7116aff03557d7a398b2bc
export default function Navbar() {



    return (
<<<<<<< HEAD
        <> 
     <nav class="navbar navbar-expand-lg bg-transparent mt-3">
        <div class="container">
            <a class="navbar-brand" href="Index.html"><img src="Images/logo/rings.png" alt="" width="30" height="30"
                    class="me-2" />Wedding Wizz</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NavLink class="nav-link active" aria-current="page" to="/home">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Halls.html">Halls</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                        <NavLink class="nav-link" to="/contant">Contact Us</NavLink>
                    </li>
                </ul>
                <button class="btn rounded-5" type="submit">
                    Log in
                </button>
                <button class="btn ms-3 rounded-5" type="submit">
=======
        <>
                <nav className="navbar navbar-expand-lg bg-transparent mt-3">
        <div className="container">
            <a className="navbar-brand" href="Index.html"><img src={img1} alt="" width="30" height="30"
                    className="me-2" />Wedding Wizz</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="Index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Halls.html">Halls</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Aboutus">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contactus.html">Contact Us</a>
                    </li>
                </ul>
                <button className="btn rounded-5" type="submit">
                    Log in
                </button>
                <button className="btn ms-3 rounded-5" type="submit">
>>>>>>> 34594467ee4c0abf5f7116aff03557d7a398b2bc
                    Register
                </button>
            </div>
        </div>
    </nav>
<<<<<<< HEAD
=======



>>>>>>> 34594467ee4c0abf5f7116aff03557d7a398b2bc
        </>
    )

}

