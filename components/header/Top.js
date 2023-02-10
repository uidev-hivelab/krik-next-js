import Link from "next/link";
import {
  BsTelephoneOutboundFill,
  BsPersonCircle,
  BsFillBagFill,
  BsReplyFill,
} from "react-icons/bs";
import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

export default function Top() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className={cx('top')}>
      <a href="tel:0356688339" className={cx('mobile_contact')}>
        <BsTelephoneOutboundFill />
        0356.688.339
      </a>
      <div className={cx('status_login')}>
        {loggedIn ? (
          <>
            <Link href="/profile" className={cx('account')}>
              <BsPersonCircle />
              Quylv
            </Link>
            <Link href="/" className={cx('account')}>
              <BsReplyFill />
              Đăng xuất
            </Link>
          </>
        ) : (
          <Link href="/account" className={cx('account')}>
            <BsPersonCircle />
            Tài khoản
          </Link>
        )}
      </div>
      <button type="button" className={cx('cart')}>
        <BsFillBagFill />
        Giỏ hàng&nbsp;
        <span className={cx('count')}>{'(0)'}</span>
      </button>
    </div>
  );
}
