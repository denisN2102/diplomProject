import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./Products.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import image from "../../images/photo1.png";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Products = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.first_content}>
        <h1>Компанія «Polygraphy» друкує найкращі видавництва та книжки</h1>
        <p>
          Однією із переваг Вашої співпраці з компанією «Polygraphy є вигідне
          географічне розташування виробництва в центрі України, тому доставка
          готової продукції можлива у будь-який регіон України, незалежно від
          обсягів замовленого тиражу.
        </p>
        <h3>Основні переваги</h3>
        <ul>
          <li>Надійність</li>
          <li>Швидкість друку</li>
          <li>Якість</li>
          <li>Швидке обслуговування</li>
          <li>Низькі ціни</li>
        </ul>
      </div>
      <div className={s.second_title}>
        <h1>Галерея нашої продукції</h1>
      </div>
      <div className={s.swiper}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img src={image} alt="Something Wrong" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="Something Wrong" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="Something Wrong" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="Something Wrong" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="Something Wrong" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="Something Wrong" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="Something Wrong" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="Something Wrong" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="Something Wrong" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="Something Wrong" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="Something Wrong" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="Something Wrong" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Products;
