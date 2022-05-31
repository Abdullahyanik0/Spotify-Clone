import React from "react";
import { Icon } from "Icons";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const activeStyle = {
    backgroundColor: "#252525",
    color: "white",
  };


return (
  <nav className="px-2">
    <ul className="flex flex-col">
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="h-10 rounded flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 "
        >
          <span>
            <Icon name="home" />
          </span>
          Ana Sayfa
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/search"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="h-10 rounded flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 "
        >
          <span>
            <Icon name="search" />
          </span>
          Ara
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/collection"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="h-10 rounded flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 "
        >
          <span>
            <Icon name="collection" size={24} />
          </span>
          Kitaplığın
        </NavLink>
      </li>
    </ul>
  </nav>
);
}
export default Menu;
