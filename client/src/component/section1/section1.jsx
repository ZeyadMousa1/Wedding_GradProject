import React from "react";

const Section1 = ({ name }) => {
  return (
    <>
      <div className="Top_rated">
        <div className="container-fluid">
          <div className="Title mt-5 mb-3">
            <p> {name} </p>
          </div>
          <div className="row">
            <ul>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

<<<<<<< Updated upstream
export default Section1;
=======



const Section1 = ({Name}) => {
    
    return (
        <>
                <div className="Top_rated">
                    <div className="container-fluid">
                        <div className="Title mt-5 mb-3">
                            <p> {Name} </p>
                        </div>
                        {/* <div className="row">
                            <ul>
                                <li><img src="" alt="" /></li>
                                <li><img src="" alt="" /></li>
                                <li><img src="" alt="" /></li>
                                <li><img src="" alt="" /></li>
                                <li><img src="" alt="" /></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
        </>
    )
}

export default Section1
>>>>>>> Stashed changes
