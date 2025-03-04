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
    <div>
      <h2>{name}</h2>
      {halls.map((hall) => (
        <div key={hall.id} className="d-flex mx-3 bg-lgiht text-black shadow rounded-2">
          {/* Wrap hall details in a Link */}
          <Link
            to={`/halls/${hall.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={hall.image} alt={hall.name} style={{ width: "100%" }} />
            <h2 className="text-center bg-light text-black" style={{ fontWeight: "600", fontSize: "20px",  }}>{hall.name}</h2>
            <p className="text-center bg-light text-black" >Price: ${hall.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Section1;
