import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

export default function Button({
  type,
  text,
  classes,
  icon,
  children,
  ...props
}) {
  return (
    <button
      type={type}
      className={cx(classes, icon ? `btn_${icon}` : "")}
      {...props}
    >
      {icon && (
        <div className={cx("btn_icon")}>
          <img src={`../../img/icons/${icon}.svg`} alt={icon} />
        </div>
      )}
      {children}
      {text}
    </button>
  );
}
