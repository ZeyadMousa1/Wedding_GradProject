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
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label className="form-label">Choose your Date</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label className="form-label">Choose your Budget</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
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
