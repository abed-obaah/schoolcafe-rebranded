import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // Optional if dashboard has a navbar

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* This will render the Dashboard pages */}
      </main>
    </div>
  );
};

export default DashboardLayout;
