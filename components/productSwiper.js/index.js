import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

import styles from "./ProductSwiper.module.scss";

const cx = classNames.bind(styles);

export default function ProductSwiper({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const swiperRef = useRef(null);
  // useEffect(() => {
  //   swiperRef.current.swiper.autoplay.stop();
  // }, [swiperRef]);
  return (
    <div
      className={cx("product_wrap")}
      // onMouseEnter={() => {
      //   swiperRef.current.swiper.autoplay.start();
      // }}
      // onMouseLeave={() => {
      //   swiperRef.current.swiper.autoplay.stop();
      //   swiperRef.current.swiper.slideTo(0);
      // }}
    >
      <div className={cx("product_swiper")}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumb"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              {/* <div className="thumb"> */}
              <img className="img" src={item} />
              {/* </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={cx("product_infos")}>'ádsdkjfhjk</div>
    </div>
  );
}
