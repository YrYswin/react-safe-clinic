import React from "react";
import { Outlet } from "react-router-dom";

const Doctor: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Doctor;
