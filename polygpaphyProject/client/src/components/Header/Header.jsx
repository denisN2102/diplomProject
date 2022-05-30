import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth.Context";
import { Navigate, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import Button from "@mui/material/Button";
import icon from "../../images/icon.jpg";

const Header = () => {
  const Navigate = useNavigate();
  const auth = useContext(AuthContext);
  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    Navigate("/Main");
  };

  return (
    <div>
      <div className={s.wrapp}>
        <div className={s.image}>
          <img src={icon} alt="Smth wrong" />
        </div>
        <div className={s.text}>
          <h1>НАЙКРАЩЕ ПОЛІГРАФІЧНЕ ПІДПРИЄМСТВО!</h1>
        </div>
        <div>
          <div className={s.contact}>
            <h2>Контакти</h2>
          </div>
          <div className={s.number}>+38098-221-74-20</div>{" "}
          <div className={s.mail}>knms1-B19@kpnu.edu.ua</div>
        </div>
        <div className={s.butt}>
          <Button onClick={logoutHandler} variant="contained">
            Вийти
          </Button>
        </div>
      </div>
      <div className={s.links}>
        <div>
          <NavLink to="/Main">Головна</NavLink>
        </div>
        <div>
          <NavLink to="/About">Про підприємтсво</NavLink>
        </div>
        <div>
          <NavLink to="/Products">Продукція</NavLink>
        </div>
        <div>
          <NavLink to="/OrderPage">Сторінка замовника</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
