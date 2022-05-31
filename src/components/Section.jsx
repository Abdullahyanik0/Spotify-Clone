import React from "react";
import { NavLink } from "react-router-dom";

const Section = ({ title, more, items }) => {
  return (
    <section>
      <header className="flex items-center justify-between">
        <h3 className="text-2xl text-white font-semibold tracking-tighter">
          {title}
        </h3>
        {more && (
          <NavLink
            className={
              "text-xs hover:underline font-semibold uppercase text-link"
            }
            to={more}
          >
            SEE ALL
          </NavLink>
        )}
      </header>
      <div className="grid grid-cols-5">
        {items.map(item => (
          <NavLink className="bg-footer p-4 rounded" key={item.id} to="/">
            <img src={item.image} alt="" />
            {item.title}
            
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Section;
