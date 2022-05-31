import React from "react";
import { Icon } from "Icons";

const DownloadApp = () => {
  return (
    <a href="/"className="h-10 flex flex-shrink-0 gap-x-4  text-link font-semibold hover:text-white items-center px-6">
      <Icon name="download" size={20} />
      Download App
    </a>
  );
};

export default DownloadApp;
