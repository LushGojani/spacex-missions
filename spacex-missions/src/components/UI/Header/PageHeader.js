import classes from "./PageHeader.module.css";
import SpaceXLogo from "../Logo/SpaceXLogo";

const PageHeader = () => {
  return (
    <header className={classes.header}>
      <SpaceXLogo />
    </header>
  );
};

export default PageHeader;
