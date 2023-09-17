import { Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/login";
import Register from "../pages/Auth/register";

const Router = () => {
  return (
    <>
      <div className="flex"> 
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
};

export default Router;
