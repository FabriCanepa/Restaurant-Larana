import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminView from "./views/AdminView";
import MenuView from "./views/MenuView";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import ResgisterView from "./views/ResgisterView";
import AboutUsView from "./views/AboutUsView";
import ErrorView from "./views/ErrorView";
import Navbar from "./components/Common/Navbar";
import NavbarLarge from "./components/Common/NavbarLarge";
import Footer from "./components/Common/Footer";

import "./Router.css";

const Router = () => {
  return (
    <BrowserRouter>
      <NavbarLarge />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/menu" element={<MenuView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<ResgisterView />} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="/aboutus" element={<AboutUsView />} />
          <Route path="*" element={<ErrorView />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
