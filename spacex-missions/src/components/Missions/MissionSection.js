import MainContainer from "../UI/Container/MainContainer";
import SectionTitle from "../UI/Title/SectionTitle";
import AllMissions from "./AllMissions";

const MissionSection = () => {
  return (
    <MainContainer>
      <section>
        <SectionTitle>All Spacex Missions</SectionTitle>
        <AllMissions />
      </section>
    </MainContainer>
  );
};
export default MissionSection;
