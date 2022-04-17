import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import Service from "../Home/Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-3 text-center">
        <h2>Services</h2>
      <CardGroup className="gap-5 mt-3">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </CardGroup>
    </div>
  );
};

export default Services;
