import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import HeroSection from "../Component/HeroSection";

 
const MainLayout = () => {
    return (
        <div className="bg-[#F1F5F8] font-jost">
            <header className="w-11/12 mx-auto">
                <Navbar></Navbar>
                <HeroSection></HeroSection>
            </header>
            <main>
                 <Outlet></Outlet>
            </main>
            <footer>footer</footer>
        </div>
    );
};

export default MainLayout;