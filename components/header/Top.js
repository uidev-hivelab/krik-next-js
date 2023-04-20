import Link from "next/link";
import {
  BsTelephoneOutboundFill,
  BsPersonCircle,
  BsFillBagFill,
  BsReplyFill,
} from "react-icons/bs";
// import { useState } from "react";
import classNames from "classnames/bind";
import { useSession, signIn, signOut } from "next-auth/react";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

export default function Top() {
  // const [loggedIn, setLoggedIn] = useState(true);
  const { data: session } = useSession();
  return (
    <div className={cx("top")}>
      <a href="tel:0356688339" className={cx("mobile_contact")}>
        <BsTelephoneOutboundFill />
        0356.688.339
      </a>
      <div className={cx("status_login")}>
        {session ? (
          <>
            <Link href="/profile" className={cx("account")}>
              <BsPersonCircle />
              {session.user.name}
            </Link>
            <button className={cx("account")} onClick={() => signOut()}>
              <BsReplyFill />
              Đăng xuất
            </button>
          </>
        ) : (
          <button className={cx("account")} onClick={() => signIn()}>
            <BsPersonCircle />
            Tài khoản
          </button>
        )}
      </div>
      <button type="button" className={cx("cart")}>
        <BsFillBagFill />
        Giỏ hàng&nbsp;
        <span className={cx("count")}>{"(0)"}</span>
      </button>
    </div>
  );
}
