import React from "react";
import Sidebar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import '../App.css'

const DashboardLayout = () => {
  return (
    <div >
      {/* <Sidebar /> */}
      <div style={{ flexGrow: 1, padding: "20px" }}>
        <Outlet /> {/* This will render nested routes */}
      </div>
    </div>
  );
};

export default DashboardLayout;
