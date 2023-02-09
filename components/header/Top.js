import Link from "next/link";
import {
  BsTelephoneOutboundFill,
  BsPersonCircle,
  BsFillBagFill,
  BsReplyFill,
} from "react-icons/bs";
import { useState } from "react";

import styles from "./styles.module.scss";

export default function Top() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className={styles.top}>
      <a href="tel:0356688339" className={styles.mobile_contact}>
        <BsTelephoneOutboundFill />
        0356.688.339
      </a>
      <div className={styles.status_login}>
        {loggedIn ? (
          <>
            <Link href="/profile" className={styles.account}>
              <BsPersonCircle />
              Quylv
            </Link>
            <Link href="/" className={styles.account}>
              <BsReplyFill />
              Đăng xuất
            </Link>
          </>
        ) : (
          <Link href="/account" className={styles.account}>
            <BsPersonCircle />
            Tài khoản
          </Link>
        )}
      </div>
      <button type="button" className={styles.cart}>
        <BsFillBagFill />
        Giỏ hàng
      </button>
    </div>
  );
}
