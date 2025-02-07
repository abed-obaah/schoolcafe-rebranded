import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import DashboardLayout from "./layout/DashboardLayout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Verify from "./pages/verify/verify";
import Reset from "./pages/reset/reset";
import Academic from "./pages/profile/academicProfile";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-account" element={<Account />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/academic-profile[aspirant]" element={<Academic />} />
        </Route>

        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
