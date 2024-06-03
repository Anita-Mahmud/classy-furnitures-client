import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
         
           <Navbar></Navbar>
           <div className="max-w-7xl mx-auto grow">
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;