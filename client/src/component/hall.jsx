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
    <div>
      <h1>{hall.name}</h1>
      <img src={hall.image} alt={hall.name} style={{ width: "300px" }} />
      <p>{hall.description}</p>
      <p>Price: ${hall.price}</p>
      <p>Capacity: {hall.capacity} people</p>
    </div>
  );
};

export default HallDetails;
