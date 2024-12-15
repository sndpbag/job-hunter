import DynamicPlate from "../Component/DynamicPlate";
import HeroSection from "../Component/HeroSection";
import TopCategories from "../Component/TopCategories";

 

const HomePage = () => {
    return (
        <div>
             <HeroSection></HeroSection>
            <DynamicPlate></DynamicPlate>
            <TopCategories></TopCategories>
        </div>
    );
};

export default HomePage;