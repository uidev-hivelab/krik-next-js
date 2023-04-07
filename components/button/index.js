import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

export default function Button({ type, text, classes, ...props }) {
  return (
    <button type={type} className={cx(classes)} {...props}>
      {text}
    </button>
  );
}
