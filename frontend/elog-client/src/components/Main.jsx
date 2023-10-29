import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Homepage";
import Profile from "../Pages/profile/Profile";
import NotFound from "../Pages/NotFound";
import Admin from "./admin/Admin";
import AuthRoute from "./auth/AuthRoute";
import Login from "../Pages/user/login/Login";
import Registration from "../Pages/user/registration/Registration";
import CreateReport from "../Pages/reportCreate/Create";
import Postdetail from "./Post/Postdetails/Postdetail";
import UpdateReport from "./Post/updateComp/UpdateReport";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateReport />} />
        {/* <Route path="/show" element={<Postdetail />} /> */}
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
        <Route path="posts/:id" element={<Postdetail />} />
        <Route path="updateposts/:id" element={<UpdateReport />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Main;
