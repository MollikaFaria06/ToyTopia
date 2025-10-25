import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ToyDetails from "./pages/ToyDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AllToys from "./pages/AllToys";
import ForgotPassword from "./pages/ForgetPassword";
import MyOrders from "./pages/MyOrders";
import Events from "./pages/Events";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toy/:id" element={<PrivateRoute><ToyDetails /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/favorites" element={<PrivateRoute><Favorites /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
          <Route path="/all-toys" element={<AllToys />} />
          <Route path="/my-orders"element={<PrivateRoute> <MyOrders /></PrivateRoute>}/>
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
