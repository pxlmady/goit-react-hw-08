import React from "react";
import css from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const handleOnLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.wrapper}>
      <p className={css.name}>Wellcome, {userData.name}</p>
      <button className={css.btn} onClick={handleOnLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
