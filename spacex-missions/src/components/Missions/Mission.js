import { Link } from "react-router-dom";

import classes from "./Mission.module.css";

const Mission = ({ launch }) => {
  return (
    <div className={classes.mission}>
      <div className={classes["mission--img--box"]}>
        <img
          src={launch.launchImg}
          className={classes["mission--img"]}
          alt="Launch mission"
        />
      </div>
      <div className={classes["mission--content"]}>
        <h1 className={classes["mission--title"]}>{launch.missionName}</h1>
        <dl className={classes["mission-info"]}>
          <div>
            <dt>Rocket Name</dt>
            <dd>{launch.rocketName}</dd>
          </div>
          <div>
            <dt>Rocket Type</dt>
            <dd>{launch.rocketType}</dd>
          </div>
          <div>
            <dt>Launch Date</dt>
            <dd>{launch.launchDate}</dd>
          </div>
        </dl>
        <Link to={`/rocket/${launch.id}`} className={classes["rocket--link"]}>
          View more
        </Link>
      </div>
    </div>
  );
};

export default Mission;
