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
// import UpdateReport from "./Post/updateComp/UpdateReport";
import Test from "./Post/updateComp/Test";
import UpdateReport from "./Post/updateComp/UpdateReport";
import ImgUpload from "./test/ImgUpload";
import ImgTest from "./test/ImgTest";


const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateReport />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AuthRoute />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Registration />} />
        <Route path="posts/:id" element={<Postdetail />} />
        {/* <Route path="updatepost/:id" element={<UpdateReport />} /> */}
        <Route path="updatepost/:id" element={<UpdateReport />} />
        <Route path="deletepost/:id" element={<Postdetail />} />
        <Route path="/imgupload" element={<ImgUpload />} />
        <Route path="/imgtest" element={<ImgTest />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Main;
