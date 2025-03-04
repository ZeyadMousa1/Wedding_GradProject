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
      <h1>Halls</h1>
      {halls.map((hall) => (
        <div key={hall.id} className="Row">
          {/* Wrap hall details in a Link */}
          <Link
            to={`/halls/${hall.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h2>{hall.name}</h2>
            <img src={hall.image} alt={hall.name} style={{ width: "200px" }} />
            <p>{hall.description}</p>
            <p>Price: ${hall.price}</p>
            <p>Capacity: {hall.capacity} people</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Section1;
