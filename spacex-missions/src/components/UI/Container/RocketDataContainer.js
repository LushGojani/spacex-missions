import classes from "./RocketDataContainer.module.css";

const RocketDataContainer = ({ children }) => {
  return (
    <section className={classes["rocket--details--container"]}>
      {children}
    </section>
  );
};

export default RocketDataContainer;
