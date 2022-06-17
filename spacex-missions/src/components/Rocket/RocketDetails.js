import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ROCKET_INFO } from "../../GraphQl/Queries";
import { formatRocketData } from "../../Helper/HelperFunctions";

import MainContainer from "../UI/Container/MainContainer";
import SectionTitle from "../UI/Title/SectionTitle";
import RocketData from "./RocketData";
import LoadingSpinner from "../UI/Loading/LoadingSpinner";

const RocketDetails = () => {
  const { rocketId } = useParams();
  const rocketImgId = rocketId;

  const { data, loading, error } = useQuery(GET_ROCKET_INFO, {
    variables: { rocketId, rocketImgId },
  });

  if (loading) return <LoadingSpinner />;
  if (error) return;

  const rocketData = formatRocketData(data.rocket, data.launchesPast);
  console.log(rocketData);
  return (
    <MainContainer>
      <SectionTitle>{rocketData.name}</SectionTitle>
      <RocketData rocketDetails={rocketData} />
    </MainContainer>
  );
};

export default RocketDetails;
