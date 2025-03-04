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
    <div className="container hall-details">
      <div className="row">
        {/* Hall Name */}
        <div className="col-12 text-center">
          <h1 className="hall-name">{hall.name}</h1>
        </div>

        {/* Hall Image */}
        <div className="col-12 text-center my-4">
          <img src={hall.image} alt={hall.name} className="hall-image" />
        </div>

        {/* Hall Description */}
        <div className="col-12 text-center">
          <p className="hall-description">{hall.descripation}</p>
        </div>

        {/* Hall Price and Capacity */}
        <div className="col-6 text-center">
          <p className="hall-price">
            Price: <span>${hall.price}</span>
          </p>
        </div>
        <div className="col-6 text-center">
          <p className="hall-capacity">
            <span>{hall.capcity}</span> people
          </p>
        </div>
      </div>
    </div>
  );
};

export default HallDetails;
