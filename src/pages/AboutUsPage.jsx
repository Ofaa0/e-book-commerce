import ContactSection from "../components/aboutComponents/ContactSection";
import OurMissionSection from "../components/aboutComponents/OurMissionSection";
import ProsCardsSection from "../components/homeComponents/ProsCardsSection";

const AboutUsPage = () => {
  return (
    <div className="bg-white-bg py-30 w-full flex flex-col justify-center items-center">
      <div className="container">
        <OurMissionSection />
      </div>
      <ContactSection />
      <div className="container">
        <div className="py-30">
          <ProsCardsSection />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
