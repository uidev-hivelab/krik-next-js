import React, { useRef, useEffect } from "react";
import Link from "next/link";
import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper";

import styles from "./ListProduct.module.scss";

const cx = classNames.bind(styles);

export default function ProductSwiper({ images }) {
  const swiperRef = useRef(null);
  useEffect(() => {
    swiperRef.current.swiper.autoplay.stop();
  }, [swiperRef]);
  return (
    <div
      onMouseEnter={() => {
        swiperRef.current.swiper.autoplay.start();
      }}
      onMouseLeave={() => {
        swiperRef.current.swiper.autoplay.stop();
        swiperRef.current.swiper.slideTo(0);
      }}
    >
      <Swiper
        ref={swiperRef}
        autoplay={{ delay: 1000 }}
        modules={[Autoplay]}
        className="item_thumb"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img className="img" src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
