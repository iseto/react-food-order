import { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Foodeliva</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} />
      </div>
    </Fragment>
  );
};

export default Header;
