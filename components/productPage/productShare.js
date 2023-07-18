import React from "react";
import classNames from "classnames/bind";
import { BsFacebook, BsMessenger, BsTwitter } from "react-icons/bs";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
} from "react-share";

import styles from "./ProductDetail.module.scss";

const cx = classNames.bind(styles);

export default function ProductShare() {
  return (
    <div className={cx("product_share")}>
      <span>Chia sẻ với:</span>
      <FacebookShareButton url={window?.location.href}>
        <BsFacebook
          style={{
            color: "#222",
            fontSize: "2rem",
          }}
        />
      </FacebookShareButton>
      <FacebookMessengerShareButton url={window?.location.href}>
        <BsMessenger
          style={{
            color: "#222",
            fontSize: "2rem",
          }}
        />
      </FacebookMessengerShareButton>
      <TwitterShareButton url={window?.location.href}>
        <BsTwitter
          style={{
            color: "#222",
            fontSize: "2rem",
          }}
        />
      </TwitterShareButton>
    </div>
  );
}
