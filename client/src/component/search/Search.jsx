import React from 'react'



function Search() {
    return (
        <>

<div className="header_2 my-5">
        <div className="container">
            <div className="row col-md-12 my-5">
                <div>
                    <h2>Find Your Wedding Hall Now</h2>
                </div>
            </div>
            <form className="row g-3 needs-validation">
                <div className="col-md-3">
                    <label className="form-label">Choose your City</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>Cairo</option>
                        <option>Alexandria</option>
                        <option>Giza</option>
                        <option>Port Said</option>
                        <option>Al Mahallah al Kubra</option>
                        <option>Al Mansurah</option>
                        <option>Tanta</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label className="form-label">Choose your Date</label>
                    <input type="Date" className="form-select" id="validationCustom04" required/>
                </div>
                <div className="col-md-3">
                    <label className="form-label">Choose your Budget</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>less Than 10K</option>
                        <option>10K - 20K</option>
                        <option>20K - 30K</option>
                        <option>30K - 40K</option>
                        <option>40K - 50K</option>
                        <option>More than 50K</option>
                    </select>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Search</button>
                </div>
            </form>
        </div>
    </div>





        </>
    )
}

export default Search
