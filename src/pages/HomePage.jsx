import BestSellerSection from "../components/homeComponents/BestSellerSection";
import FlashSales from "../components/homeComponents/FlashSales";
import ProsCardsSection from "../components/homeComponents/ProsCardsSection";
import RecommendedSection from "../components/homeComponents/RecommendedSection";

const HomePage = () => {
  return (
    <div className="bg-white-bg w-full">
      <div id="pros-cards" className="flex justify-center items-center py-30">
        <div className="container w-full px-4 lg:px-0">
          <ProsCardsSection />
        </div>
      </div>
      <BestSellerSection />
      <RecommendedSection />
      <FlashSales />
    </div>
  );
};

export default HomePage;
