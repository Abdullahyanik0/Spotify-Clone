import React from "react";
import Sidebar from "components/Sidebar";
import BottomBar from "components/BottomBar";
import Content from "components/Content";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <BottomBar />
    </>
  );
};

export default App;
