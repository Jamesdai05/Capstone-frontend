import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Homepage";
import Profile from "../Pages/profile/Profile";
import Show from "../Pages/Showreport/Show";
import NotFound from "../Pages/NotFound";
import Admin from "./admin/Admin";
import AuthRoute from "./auth/AuthRoute";
import Login from "../Pages/user/login/Login";
import Registration from "../Pages/user/registration/Registration";
import CreateReport from "../Pages/reportCreate/Create";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateReport />} />
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
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Registration />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Main;
