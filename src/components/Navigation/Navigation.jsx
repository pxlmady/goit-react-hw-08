import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.homeContactsPagesLink}>
      <NavLink
        className={({ isActive }) =>
          clsx(css.navLink, { [css.active]: isActive })
        }
        to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            clsx(css.navLink, { [css.active]: isActive })
          }
          to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
