import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { menuData } from "../../data/menu";
import { BsSearch } from "react-icons/bs";

const cx = classNames.bind(styles);

export default function Menu() {
  return (
    <div className={cx("main_menu")}>
      <h1 className={cx("logo")}>
        <Link href="/">
          <img src="../../../img/logo.png" />
          <span className="blind">KRIK</span>
        </Link>
      </h1>
      <nav className={cx("nav")}>
        <ul className={cx("nav_lst")}>
          {menuData.map((menu, index) => (
            <li key={index} className={cx("nav_item")}>
              <Link href={menu.href}>
                <span>{menu.title}</span>
              </Link>
              {menu.subMenu && (
                <div className={cx("nav_sub")}>
                  <ul className={cx("nav_sub_lst")}>
                    {menu.subMenu.map((sub, index) => (
                      <li key={index} className={cx("nav_sub_item")}>
                        <Link href={sub.href}>{sub.title}</Link>
                      </li>
                    ))}
                  </ul>
                  <Swiper
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={10}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    modules={[Autoplay]}
                    className={cx("nav_sub_img")}
                  >
                    {menu.subMenu.map((sub, index) => (
                      <SwiperSlide key={index}>
                        <Link href={sub.href}>
                          <img className="img" src={sub.image} />
                          <p className={cx("nav_sub_title")}>{sub.title}</p>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className={cx("search")}>
        <input
          type="text"
          className={cx("input_control")}
          placeholder="Tìm kiếm..."
        />
        <button type="button" className={cx("btn", "btn_search")}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}
