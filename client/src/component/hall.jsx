import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HallDetails = () => {
  const { id } = useParams();
  const [hall, setHall] = useState(null);

  useEffect(() => {
    const fetchHall = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/halls/${id}`
        );
        setHall(response.data.hall); // Assuming the API returns { hall: { ... } }
        console.log(response.data.hall);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchHall(); // Call the function to fetch hall details
  }, [id]); // Add `id` as a dependency
  id;
  if (!hall) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  return (
    <div className="container">
      <div className="row ">
        <div className="col-12 d-flex justify-content-center">
          <h1 style={{ fontWeight: "600", fontSize: "34" }}>{hall.name}</h1>
        </div>
        <div className="col-12 d-flex justify-content-center m-auto">
          <img src={hall.image} alt={hall.name} style={{ width: "80%" }} />
        </div>
        <div className="col-12 d-flex justify-content-center">
          <p>{hall.description}</p>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <p>{hall.description}</p>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <p>Price: ${hall.price}</p>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <p>Capacity: {hall.capacity} people</p>
        </div>
      </div>
    </div>
  );
};

export default HallDetails;
