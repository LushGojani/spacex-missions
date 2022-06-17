import { useQuery } from "@apollo/client";
import { formatLaunches } from "../../Helper/HelperFunctions";

import { GET_PAST_LAUNCHES } from "../../GraphQl/Queries";
import AllMissionsContainer from "../UI/Container/AllMissionContainer";
import Mission from "./Mission";
import LoadingSpinner from "../UI/Loading/LoadingSpinner";

const AllMissions = () => {
  const { data, loading, error } = useQuery(GET_PAST_LAUNCHES);

  if (loading) return <LoadingSpinner />;
  if (error) return;
  const launches = formatLaunches(data.launchesPast);
  console.log(launches);

  return (
    <AllMissionsContainer>
      {launches.map((launch, index) => (
        <Mission launch={launch} key={index} />
      ))}
    </AllMissionsContainer>
  );
};
export default AllMissions;
