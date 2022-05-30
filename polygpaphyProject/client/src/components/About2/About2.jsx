import React from "react";
import photo1 from "../../images/photo1.png";
import photo2 from "../../images/photo2.png";
import form from "../../images/form.png";
import s from "./About2.module.css";

function About2() {
  return (
    <div className={s.wrapper}>
      <h1>Polygraphy лідер серед поліграфічних підприємств</h1>
      <div className={s.text}>
        «Polygraphy» – товариство з обмеженою відповідальністю, спільне
        українське поліграфічне підприємство, створене в 1995 році,
        спеціалізується на виробництві самоклеючих етикеток.
      </div>
      <div className={s.text}>
        Компанія «Polygraphy» здатна забезпечити високотехнологічними етикетками
        широке коло виробників харчової, винно-горілчаної,
        парфумерно-косметичної, фармацевтичної продукції, побутової хімії,
        агрохімії, автохімії та олив.
      </div>
      <div className={s.text}>
        Друкарня ТОВ «Polygraphy» має власні виробничі, складські та офісні
        приміщення площею понад 200 кв.м. на власній земельній ділянці.
      </div>
      <div className={s.text}>
        Чисельність працівників компанії на сьогодні – 10 осіб. Цілодобовий
        режим роботи виробництва гарантує виконання замовлень в максимально
        стислі строки з обов’язковою доставкою продукції з Черкас у будь-яке
        географічне місце України.
      </div>
      <div className={s.text}>
        Чисельність працівників компанії на сьогодні – 10 осіб. Цілодобовий
        режим роботи виробництва гарантує виконання замовлень в максимально
        стислі строки з обов’язковою доставкою продукції з Кам'янця-Подільського
        у будь-яке географічне місце України.
      </div>
      <h3>Технологічні можливості компанії:</h3>
      <div className={s.text}>
        10-фарбний флексографічний, офсетний та ротаційно-трафаретний
        ультрафіолетовий друк на паперових та плівкових матеріалах, гаряче та
        холодне тиснення фольгою, ламінування, виробництво сендвіч-етикеток та
        промо-етикеток, міні-буклетів, позиційне притиснення голограм, конгрев,
        індивідуальне маркування та нумерація етикеток, ефект «гелевого золота»,
        виготовлення імітаційних голограм з мікротекстом.
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
            <a href="http://localhost:3000/">
              <img src={photo2} alt="Smth wrong" />
            </a>
          </div>
          <a href="http://localhost:3000/">
            <h3>Головна сторінка</h3>
          </a>
          <div className={s.second_text}>Перейти на головну сторінку</div>
        </div>
      </div>
    </div>
  );
}

export default About2;
