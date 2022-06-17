import classes from "./MainContainer.module.css";

const MainContainer = ({ children }) => {
  return <div className={classes["main-container"]}> {children} </div>;
};

export default MainContainer;
