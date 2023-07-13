import React from "react";
import classNames from "classnames/bind";
import { BsFacebook, BsTwitter } from "react-icons/bs";

import Button from "../button";
import styles from "./ProductDetail.module.scss";

const cx = classNames.bind(styles);

export default function ProductShare() {
  return (
    <div className={cx("product_share")}>
      <span>Chia sẻ với:</span>
      <Button
        children={
          <BsFacebook
            style={{
              color: "#222",
              fontSize: "2rem",
            }}
          />
        }
      />
      <Button
        children={
          <BsTwitter
            style={{
              color: "#222",
              fontSize: "2rem",
            }}
          />
        }
      />
    </div>
  );
}
