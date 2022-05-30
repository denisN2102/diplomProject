import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth.Context";
import { Navigate, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import s from "./Header2.module.css";
import Button from "@mui/material/Button";
import icon from "../../images/icon.jpg";

const Header2 = () => {
  const Navigate = useNavigate();
  const auth = useContext(AuthContext);
  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    Navigate("/");
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
          <Button
            onClick={() => {
              window.location.href = "http://localhost:3000/Registration";
            }}
            variant="contained"
          >
            Ввійти
          </Button>
        </div>
      </div>
      <div className={s.links}>
        <div>
          <NavLink to="/">Головна</NavLink>
        </div>
        <div>
          <NavLink to="/SecondAbout">Про підприємтсво</NavLink>
        </div>
        <div>
          <NavLink to="/Products">Продукція</NavLink>
        </div>
        <div>
          <NavLink to="/SecondOrderPage">Сторінка замовника</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header2;
