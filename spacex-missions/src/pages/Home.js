import React from "react";

import MissionSection from "../components/Missions/MissionSection";
import Slider from "../components/HeroSection/Slider";

const Home = () => {
  return (
    <React.Fragment>
      <main>
        <Slider />
        <MissionSection />
      </main>
    </React.Fragment>
  );
};
export default Home;
