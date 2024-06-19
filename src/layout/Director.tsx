import React from "react";
import { Outlet } from "react-router-dom";

const Director: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Director;
