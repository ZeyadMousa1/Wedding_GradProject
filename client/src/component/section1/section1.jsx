import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Section1 = ({ name }) => {
  const [halls, setHalls] = useState([]);

  useEffect(() => {
    const fetchHalls = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/halls");
        setHalls(response.data.halls);
        console.log(response.data.halls);
      } catch (e) {
        console.log(e);
      }
    };
    fetchHalls();
  }, []);

  return (
    <div className="container-fluid p-0">
      {" "}
      {/* Remove padding and use fluid container */}
      <h1 className="mb-3">{name}</h1> {/* Reduce margin-bottom */}
      <div className="row">
        {halls.map((hall) => (
          <div key={hall.id} className="col-md-3 col-sm-6 mb-3">
            {" "}
            {/* Smaller columns */}
            <div className="card h-100">
              <img
                src={hall.image}
                alt={hall.name}
                className="card-img-top w-100 h-75"
                style={{ height: "150px", objectFit: "cover" }}
              />
              <div className="card-body h-25 d-flex justify-content-center align-items-end text-light bg-body">
                <h2 className="card-title" style={{ fontSize: "1.25rem" }}>
                  {hall.name}
                </h2>{" "}
                <p className="card-text" style={{ fontSize: "0.9rem" }}>
                  <strong>Price:</strong> ${hall.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
