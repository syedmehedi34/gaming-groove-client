import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-slate-300">
        <div className="w-11/12 mx-auto ">
          <Navbar></Navbar>
        </div>
      </div>

      <div className="flex-1">
        <Outlet></Outlet>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
