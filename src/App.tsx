import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Component/Layout/Header";
import Register from "./Component/Auth/Register";
import Login from "./Component/Auth/Login";
import Homepage from "./Component/Layout/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from "./Component/Auth/AboutUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./pages/Footer";
import Gallery from "./Component/Auth/Gallery";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>


    <Footer />
    </BrowserRouter>
  );
};

export default App;
