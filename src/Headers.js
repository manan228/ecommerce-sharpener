import { useContext } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Headers.module.css";
import AuthContext from "./Login/auth-context";

const Heading = () => {
  // console.log(`headers`)    
  return (
    <>
      <ul className={classes.menu}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/store">Store</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/auth">Login</NavLink>
        </li>
        <li>
          <NavLink to="/contactUs">Contact US</NavLink>
        </li>
      </ul>
      <h1 className={classes.heading}>The Generics</h1>
    </>
  );
};

export default Heading;
