import React from "react";
import photo from "../../images/polygraphy.jpg";
import photo1 from "../../images/photo1.png";
import photo2 from "../../images/photo2.png";
import form from "../../images/form.png";
import s from "./Main2.module.css";

const Main2 = () => {
  return (
    <div className={s.wrapper}>
      <div>
        <div className={s.content}>
          <div className={s.main_text}>
            <h3>
              Найкращий друк видавництв від компанії «Polygraphy», найкращий в
              Україні!
            </h3>
            <p className={s.top_text}>
              «Polygraphy» – поліграфічне підприємство, що спеціалізується на
              виробництві та друку книжок.
            </p>
            <p>
              Компанія «Polygraphy» готова забезпечити високотехнологічним
              друком ваші видавницвта та книжки. Наша команія вже давно
              займається друком і має широкий спектр клієнтської бази
            </p>
          </div>
          <div className={s.image}>
            <img src={photo} alt="Smth wrong" />
          </div>
        </div>
        <div className={s.second_content}>
          <div className={s.second_content_about}>
            <div>
              <a href="http://localhost:3000/Products">
                <img src={photo1} alt="" />
              </a>
            </div>
            <a href="http://localhost:3000/Products">
              <h3>Наша продукція</h3>
            </a>
            <div className={s.second_text}>
              Команія «Polygraphy» друкує найкращу продукцію для споживача
            </div>
          </div>
          <div className={s.second_content_about}>
            <div>
              <a href="http://localhost:3000/SecondOrderPage">
                <img src={form} alt="" />
              </a>
            </div>
            <a href="http://localhost:3000/SecondOrderPage">
              <h3>Сторінка замовника</h3>
            </a>
            <div className={s.second_text}>
              Якщо Вас зацікавила продукція нашого підприємства, заповніть форму
              замовлення!
            </div>
          </div>
          <div className={s.second_content_about}>
            <div>
              <a href="http://localhost:3000/About">
                <img src={photo2} alt="Smth wrong" />
              </a>
            </div>
            <a href="http://localhost:3000/About">
              <h3>Про підприємтсво</h3>
            </a>
            <div className={s.second_text}>
              Дізнайтесь більше про наше підприємство
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main2;
