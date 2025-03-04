import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link

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
    <>
      <div className="mt-5 ms-3">
        <h2>
          {name} <i className="fa-solid fa-arrow-right"></i>{" "}
        </h2>
      </div>
      <div
        className="d-flex my-5 main"
        style={{ width: "100%", height: "300px" }}
      >
        {halls.map((hall) => (
          <div key={hall.id} className="d-flex mx-3 shadow rounded-2">
            {/* Wrap hall details in a Link */}
            <Link
              to={`/halls/${hall.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                className="photo"
                src={hall.image}
                alt={hall.name}
                style={{ width: "100%", height: "100%" }}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Section1;
