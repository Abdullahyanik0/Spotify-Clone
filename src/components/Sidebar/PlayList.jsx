import React from "react";

const PlayList = () => {
  return (
    <nav className="mx-6 mt-2 pt-2 overflow-auto border-t border-white border-opacity-20">
      <ul>
        <li>
          {new Array(20).fill(
            <a
              href="/"
              className="text-s text-link hover:text-white flex h-8 items-center"
            >
              Çalma Listem
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default PlayList;
