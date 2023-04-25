import React, { useState } from "react";
import classNames from "classnames/bind";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "../../styles/Forgot.module.scss";
import Header from "@/components/header";
import Input from "@/components/input";
import Button from "@/components/button";
import BarLoader from "@/components/loader";

const cx = classNames.bind(styles);

export default function forgot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const emailValidation = Yup.object({
    email: Yup.string()
      .required("Cần phải nhập email để reset password")
      .email("Email không hợp lệ"),
  });
  const forgotHandler = async () => {};
  return (
    <div className="wrap">
      {loading && <BarLoader />}
      <Header className="box_shadow" />
      <div className={cx("forgot_wrap")}>
        <div className={cx("forgot_title")}>QUÊN MẬT KHẨU</div>
        <div className={cx("forgot_content")}>
          <Formik
            enableReinitialize
            initialValues={{
              email,
            }}
            validationSchema={emailValidation}
            onSubmit={() => {
              forgotHandler();
            }}
          >
            {(form) => (
              <Form>
                <Input
                  type="text"
                  name="email"
                  placeholder="Nhập email của bạn"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className={cx("btn_wrap")}>
                  <Button type="text" text="Xác nhận" classes="btn_forgot" />
                  {/* <div className={cx("form_message")}>
                  {login_error && (
                    <strong className="text_error">{login_error}</strong>
                  )}
                </div> */}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
