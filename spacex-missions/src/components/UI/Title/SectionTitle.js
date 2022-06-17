import classes from "./SectionTitle.module.css";

const SectionTitle = ({ children }) => {
  return (
    <div className={classes["tittle--container"]}>
      <h2 className={classes["section--tittle"]}>{children}</h2>
      <span className={classes["line"]}></span>
    </div>
  );
};
export default SectionTitle;
