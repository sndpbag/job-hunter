import ClientSays from "../Component/ClientSays";
import DynamicPlate from "../Component/DynamicPlate";
import FeaturedJobs from "../Component/FeaturedJobs";
import HeroSection from "../Component/HeroSection";
import TopCategories from "../Component/TopCategories";

 

const HomePage = () => {
    return (
        <div>
             <HeroSection></HeroSection>
            <DynamicPlate></DynamicPlate>
            <TopCategories></TopCategories>
            <FeaturedJobs></FeaturedJobs>
            <ClientSays></ClientSays>
        </div>
    );
};

export default HomePage;