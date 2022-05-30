import { Button } from "@mui/material";
import React from "react";
import s from "./OrderPage2.module.css";

const OrderPage2 = () => {
  return (
    <div className={s.wrapp}>
      <div className={s.content}>
        <h1>Ця сторінка стане доступною після того як ви зареєструєтесь</h1>
        <Button
          onClick={() => {
            window.location.href = "http://localhost:3000/Registration";
          }}
          variant="contained"
        >
          Зареєструватися
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default OrderPage2;
