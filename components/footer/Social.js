import classNames from "classnames/bind";
import { BsHeadphones,BsFacebook,BsInstagram,BsHandbagFill } from "react-icons/bs";
import { SiZalo } from "react-icons/si";

import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

export default function Social() {
  return (
    <div className={cx("social_area")}>
      <div className={cx("inner")}>
        <div className={cx("group")}>
          <strong className={cx("title")}>Gọi mua hàng (08:30-22:00)</strong>
          <div className={cx("content")}>
            <div className={cx("phone_number")}>
              <BsHeadphones/>
              <a href="tel:0356688339">0356.688.339</a>
            </div>
          </div>
        </div>
        <div className={cx("group")}>
          <strong className={cx("title")}>Góp ý, khiếu nại (08:30-22:00)</strong>
          <div className={cx("content")}>
            <div className={cx("phone_number")}>
              <BsHeadphones/>
              <a href="tel:0356688339">0356.688.339</a>
            </div>
          </div>
        </div>
        <div className={cx("group")}>
          <strong className={cx("title")}>ĐĂNG KÝ NHẬN THÔNG TIN MỚI</strong>
          <div className={cx("content")}>
            <div className={cx("newsletter")}>
              <input type="text" className={cx("input_control")} placeholder="Email của bạn..."/>
              <button type="button" className={cx("btn","btn_register")}>Đăng ký</button>
            </div>
          </div>
        </div>
        <div className={cx("group")}>
          <strong className={cx("title")}>THEO DÕI CHÚNG TÔI</strong>
          <div className={cx("content")}>
            <ul className={cx('social')}>
              <li className={cx('item')}>
                <a href="https://www.facebook.com/luuvan.quy.5" target={"_blank"}><BsFacebook/></a>
              </li>
              <li className={cx('item')}>
                <a href="/"><BsInstagram/></a>
              </li>
              <li className={cx('item')}>
                <a href="/"><BsHandbagFill/></a>
              </li>
              <li className={cx('item')}>
                <a href="https://zalo.me/0356688339" target={"_blank"}><SiZalo/></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
