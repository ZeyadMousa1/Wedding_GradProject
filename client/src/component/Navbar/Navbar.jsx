import "../../images/rings.png"


export default function Navbar() {



    return (
        <>
                <nav className="navbar navbar-expand-lg bg-transparent mt-3">
        <div className="container">
            <a className="navbar-brand" href="Index.html"><img src="....." alt="" width="30" height="30"
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
                    Register
                </button>
            </div>
        </div>
    </nav>



        </>
    )

}

