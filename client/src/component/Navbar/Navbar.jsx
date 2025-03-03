import { NavLink } from "react-router-dom";
import './Navbar.css'
export default function Navbar() {

    return (
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
                    Register
                </button>
            </div>
        </div>
    </nav>
        </>
    )

}

