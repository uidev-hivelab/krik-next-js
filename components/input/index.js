import React from "react";
import classNames from "classnames/bind";
import { useField } from "formik";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

export default function Input({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={cx("input_wrap")}>
      <input
        type={field.type}
        name={field.name}
        className={cx("input_form")}
        {...field}
        {...props}
      />
      {meta.error && meta.touched && (
        <div className={cx("input_message")}>{meta.error}</div>
      )}
    </div>
  );
}
