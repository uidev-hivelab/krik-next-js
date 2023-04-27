import React, { useState } from "react";
import classNames from "classnames/bind";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "../../styles/Forgot.module.scss";
import Header from "@/components/header";
import Input from "@/components/input";
import Button from "@/components/button";
import BarLoader from "@/components/loader";
import axios from "axios";

const cx = classNames.bind(styles);

export default function forgot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailValidation = Yup.object({
    email: Yup.string()
      .required("Cần phải nhập email để đặt lại mật khẩu")
      .email("Email không hợp lệ"),
  });
  const forgotHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/auth/forgot", { email });
      setError("");
      setSuccess(data.message);
      setLoading(false);
      setEmail("");
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };
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
                  <Button type="submit" text="Xác nhận" classes="btn_forgot" />
                  {(success || error) && (
                    <div className={cx("form_message")}>
                      {success && (
                        <strong className="text_success">{success}</strong>
                      )}
                      {error && <strong className="text_error">{error}</strong>}
                    </div>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
