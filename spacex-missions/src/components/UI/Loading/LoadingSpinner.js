import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes["loading--container"]}>
      <div className={classes["loading--center"]}>
        <div className={classes["loading--spinner"]}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
