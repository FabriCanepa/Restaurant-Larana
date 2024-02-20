import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminView from "./views/AdminView";
import AdminProduct from "./components/Admin/AdminProduct/AdminProduct";
import MenuView from "./views/MenuView";
import HomeView from "./views/HomeView";
import ComeWebView from "./views/ComeWebView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AboutUsView from "./views/AboutUsView";
import ErrorView from "./views/ErrorView";
import Navbar from "./components/Common/Navbar";
import UserProfileView from "./views/UserProfileView";
import ContactView from "./views/ContactView";

import NavbarLarge from "./components/Common/NavbarLarge";
import Footer from "./components/Common/Footer";

import "./Router.css";
import { useSession } from "./stores/useSession";

const Router = () => {
  const { user, isLoggedIn } = useSession();

  return (
    <BrowserRouter>
      <NavbarLarge />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/comeweb" element={<ComeWebView />} />
          <Route path="/menu" element={<MenuView />} />
          <Route
            path="/profile"
            element={
              isLoggedIn ? <UserProfileView /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <LoginView />}
          />
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/" /> : <RegisterView />}
          />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/admin" />
          <Route
            path="/admin"
            element={user?.isAdmin ? <AdminView /> : <Navigate to="/" />}
          >
            <Route index element={<AdminProduct />} />
          </Route>

          <Route path="/aboutus" element={<AboutUsView />} />
          <Route path="*" element={<ErrorView />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
