import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../components/home-page/HomePage";
import RegisterPage from "../components/register-page/RegisterPage";
import LoginPage from "../components/login-page/LoginPage";
import DashboardPage from "../components/dashboard-page/DashboardPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default AppRouter;
