import React from "react";
import RocketDataContainer from "../UI/Container/RocketDataContainer";

import classes from "./RocketData.module.css";

const RocketData = ({ rocketDetails }) => {
  return (
    <RocketDataContainer>
      <div className={classes["image--container"]}>
        <img
          src={rocketDetails.rocketImg}
          alt="rocket"
          className={classes["rocket--img"]}
        />
      </div>
      <div>
        <div className={classes["rocket-details"]}>
          <div>
            <dt>Height</dt>
            <dd>{rocketDetails.height.meters} m</dd>
          </div>
          <div>
            <dt>Diameter</dt>
            <dd> {rocketDetails.diameter.meters} m</dd>
          </div>
          <div>
            <dt> Mass</dt>
            <dd>{rocketDetails.mass.kg.toLocaleString()} kg</dd>
          </div>
          <div>
            <dt>First Flight</dt>
            <dd>{rocketDetails.first_flight}</dd>
          </div>
          <div>
            <dt> Success Rate Percentage </dt>
            <dd>{rocketDetails.success_rate_pct}%</dd>
          </div>
          <div>
            <dt>Cost Per Launch</dt>
            <dd>{rocketDetails.cost_per_launch.toLocaleString()} $</dd>
          </div>
          <div>
            <dt>Description</dt>
            <dd>{rocketDetails.description}</dd>
          </div>
        </div>
      </div>
    </RocketDataContainer>
  );
};

export default RocketData;
