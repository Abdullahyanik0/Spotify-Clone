import React from "react";
import Navigation from "./Navbar/Navigation";
import Auth from "./Navbar/Auth";
const Navbar = () => {
  return (
    <nav className="h-[3.75rem] flex items-center px-8 justify-between">
      <Navigation />
      <Auth/>
      
    </nav>
  );
};

export default Navbar;
