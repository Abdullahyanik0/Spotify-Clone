import React from "react";
import Navbar from "components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "wiews/Home";
import Search from "wiews/Search";
import Collection from "wiews/Collection";

const Content = () => {
  return (
    <main className="w-full">
      <Navbar />
      <div className="px-8 pt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </div>
    </main>
  );
};

export default Content;
