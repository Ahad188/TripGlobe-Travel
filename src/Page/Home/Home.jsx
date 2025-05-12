import BeastPlace from "../BeastPlace/BeastPlace";
import WorldSection from "../WorldSection/WorldSection";
import Banner from "./Banner/Banner";

 

const Home = () => {
     return (
          <div>
                <Banner></Banner>
                <WorldSection></WorldSection>
                <BeastPlace></BeastPlace>
          </div>
     );
};

export default Home;