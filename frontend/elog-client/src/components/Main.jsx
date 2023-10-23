import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Homepage";
import Profile from "../Pages/profile/Profile";
import Create from "../Pages/Report/Create";
import Show from "../Pages/Showreport/Show";
import NotFound from "../Pages/NotFound";
import Admin from "./admin/Admin";
import AuthRoute from "./auth/AuthRoute";
import Login from "../Pages/user/login/Login";
import Registration from "../Pages/user/registration/Registration";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/show" element={<Show />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/admin"
          element={
            <AuthRoute>
              <Admin />
            </AuthRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Main;
