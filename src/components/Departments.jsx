import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    { name: "Pediatrics", imageUrl: "/departments/pedia.jpg" },
    { name: "Orthopedics", imageUrl: "/departments/ortho.jpg" },
    // Add other departments here
  ];

  const responsive = {
    extraLarge: { breakpoint: { max: 3000, min: 1324 }, items: 4 },
    large: { breakpoint: { max: 1324, min: 1005 }, items: 3 },
    medium: { breakpoint: { max: 1005, min: 700 }, items: 2 },
    small: { breakpoint: { max: 700, min: 0 }, items: 1 },
  };

  return (
    <div className="container departments">
      <h2>Departments</h2>
      <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
        {departmentsArray.map((depart, index) => (
          <div key={index} className="card">
            <div className="depart-name">{depart.name}</div>
            <img src={depart.imageUrl} alt="Department" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Departments;
