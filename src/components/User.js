import { useState, useEffect } from "react";

const User = ({ name }) => {
  const [count] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("NAMASTE REACT OP");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="m-4 p-4 bg-gray-50 rounded-lg">
      <h1>
        Count:
        {count}
      </h1>
      <h1>Name: {name}</h1>
      <h2>Location: Kolkata</h2>
      <h3>Contact: @swe_sandeep</h3>
    </div>
  );
};

export default User;
