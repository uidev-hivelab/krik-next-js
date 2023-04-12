import React from "react";
import classNames from "classnames/bind";
import styles from "./barLoader.module.scss";

const cx = classNames.bind(styles);

export default function BarLoader() {
  return (
    <div className={cx("loader_wrap")}>
      <div className={cx("loader")}></div>
    </div>
  );
}
