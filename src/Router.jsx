import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminView from "./views/AdminView";
import AdminProduct from "./components/Admin/AdminProduct/AdminProduct";
import MenuView from "./views/MenuView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AboutUsView from "./views/AboutUsView";
import ErrorView from "./views/ErrorView";

import UserProfileView from "./views/UserProfileView";
import ContactView from "./views/ContactView";
import ComeWebView from "./views/ComeWebView";
import CartView from "./views/CartView";

import NavbarLarge from "./components/Common/NavbarLarge";
import Footer from "./components/Common/Footer";
import Navbar from "./components/Common/Navbar";

import "./Router.css";
import { useSession } from "./stores/useSession";
import Status from "./views/Status";



const Router = () => {
  const { user, isLoggedIn } = useSession();

  return (
    <BrowserRouter>
      <NavbarLarge />
      <Navbar></Navbar>
      <main>
        <Routes>
          <Route path="/" element={<ComeWebView />} />
          <Route path="/menu" element={!isLoggedIn ? <Navigate to="/"/> : <MenuView />} />
          <Route path="/cart" element={!isLoggedIn ? <Navigate to="/"/> : <CartView />} /> 
          <Route path="/status" element={<Status/>} /> 
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
