import FeatureProduct from "../components/FeatureProduct/FeatureProduct";
import HeroSection from "../components/HeroSection/HeroSection";
import Services from "../components/Services/Services";
import Trusted from "../components/Trusted/Trusted";

const Home = () => {
  const data = {
    name: "Online Store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
