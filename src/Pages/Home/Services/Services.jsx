import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-40">
      <div className="text-center space-y-4">
        <h3 className="text-xl font-semibold text-[#FF3811]">Service</h3>
        <h1 className="text-4xl font-semibold">Our Service Area</h1>
        <p className="font-semibold">
          The majority have suffered alteration in some form, by injected
          humour, <br /> or randomised words which don't look even slightly
          believable.{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            services.map(service => <ServiceCard service={service}></ServiceCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Services;
