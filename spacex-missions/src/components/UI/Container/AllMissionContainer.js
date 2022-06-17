import classes from "./AllMissionsContainer.module.css";

const AllMissionsContainer = ({ children }) => {
  return <div className={classes["missions--container"]}>{children}</div>;
};

export default AllMissionsContainer;
