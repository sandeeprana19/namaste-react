import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // If no dependency array => useEffect is called on every component render
  // If dependency array = [] => useEffect is called on initial render(just once)
  // If dependency array is [btnNameReact] => useEffect is called every time btnNameReact is updated
  useEffect(() => {}, [btnNameReact]);

  return (
    <div className="flex items-center bg-pink-100 justify-between pr-8 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="w-24 flex items-center justify-center overflow-hidden">
        <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
      </div>
      <div>
        <ul className="flex items-center space-x-4">
          <li>Online status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
