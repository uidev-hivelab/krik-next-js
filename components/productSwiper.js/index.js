import React, { useState } from "react";
import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

import styles from "./ProductDetail.module.scss";

const cx = classNames.bind(styles);

export default function ProductSwiper({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className={cx("product_list")}>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView="auto"
          direction="vertical"
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={cx("product_thumb")}>
                <img className={cx("product_img")} src={item} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={cx("product_swiper")}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={cx("product_thumb")}>
                <img className={cx("product_img")} src={item} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
