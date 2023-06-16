import HeroSection from "../components/Hero-section";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeatureProduct from "../components/featureProduct";
import Contact from "./Contact";

const Home = () => {
  const data = {
    name: "Al-Amin Store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
      <Contact />
    </>
  );
};

export default Home;
