import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, EffectFade } from "swiper";

import styles from "../ProductDetail.module.scss";

const cx = classNames.bind(styles);

export default function ProductSwiper({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const sliderRef = useRef(null);
  useEffect(() => {
    sliderRef.current.swiper.slideTo(0);
  }, [images]);
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
          modules={[FreeMode, Thumbs]}
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
            "--swiper-navigation-color": "rgba(0, 0, 0, 0.2)",
            "--swiper-pagination-color": "rgba(0, 0, 0, 0.2)",
          }}
          ref={sliderRef}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          navigation={true}
          effect={"fade"}
          modules={[FreeMode, Navigation, Thumbs, EffectFade]}
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
