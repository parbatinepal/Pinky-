import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Component/Layout/Header";
import Register from "./Component/Auth/Register";
import Login from "./Component/Auth/Login";
import Homepage from "./Component/Layout/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
