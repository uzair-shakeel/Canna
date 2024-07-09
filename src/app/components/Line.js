import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import "./Line.css"; // Import the CSS file

const Line = () => {
  const items = ["Delivery Service", "Curbside Pickup", "In Store Pickup"];
  const repeatedItems = items.concat(items); // Repeat the items to create a seamless scroll

  return (
    <div className="carousel-container bg-blue-100 flex items-center py-2 text-sm overflow-hidden">
      <div className="carousel-content">
        {repeatedItems.map((item, index) => (
          <React.Fragment key={index}>
            <p className="inline-block mx-4">{item}</p>
            <VscDebugBreakpointLog className="inline-block mx-4" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Line;
