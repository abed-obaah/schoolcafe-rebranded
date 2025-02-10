import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const PublicLayout = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div>
        <Outlet /> {/* This will render the nested pages */}
      </div>
      
      <Footer />
    </div>
  );
};

export default PublicLayout;
