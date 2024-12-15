import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
 

 
const MainLayout = () => {
    return (
        <div className="bg-[#F1F5F8] font-jost">
            <header className="w-11/12 mx-auto">
                <Navbar></Navbar>
               

            </header>
            <main>
                 <Outlet></Outlet>
            </main>
            <footer>footer</footer>
        </div>
    );
};

export default MainLayout;