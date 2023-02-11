import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import classNames from "classnames/bind";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./KeyVisual.module.scss";

const cx = classNames.bind(styles);

export default function KeyVisual() {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return (
    <>
      <Swiper
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Navigation]}
        className="key_visual"
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
      }}
      >
        <SwiperSlide>
          <Link href="/">
            <img className={cx("thumb")} src="../../img/key_visual.png"/>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <img className={cx("thumb")} src="../../img/key_visual.png"/>
          </Link>
        </SwiperSlide>
        <button type="button" className={cx("btn", "btn_prev")} ref={navigationPrevRef}>
          <BsChevronLeft/>
        </button>
        <button type="button" className={cx("btn", "btn_next")} ref={navigationNextRef}>
          <BsChevronRight/>
        </button>
      </Swiper>
    </>
  );
}
