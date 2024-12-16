import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import SubscribeSection from "../Component/SubscribeSection";
import Footer from "../Component/Footer";
import LastFooter from "../Component/LastFooter";
 

 
const MainLayout = () => {
    return (
        <div className="bg-[#F1F5F8] font-jost">
            <header className="w-11/12 mx-auto">
                <Navbar></Navbar>
               

            </header>
            <main>
                 <Outlet></Outlet>
            </main>
            <SubscribeSection></SubscribeSection>
            {/* footer */}
            <Footer></Footer>
            <LastFooter></LastFooter>
        </div>
    );
};

export default MainLayout;