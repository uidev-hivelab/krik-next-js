import React, { useState } from "react";
import classNames from "classnames/bind";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import jwt from "jsonwebtoken";
import { getSession, signIn } from "next-auth/react";
import { Router } from "next/router";
import styles from "../../../styles/Forgot.module.scss";
import Header from "@/components/header";
import Input from "@/components/input";
import Button from "@/components/button";
import BarLoader from "@/components/loader";

const cx = classNames.bind(styles);

export default function reset({ user_id }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const resetPasswordValidation = Yup.object({
    password: Yup.string()
      .required("Trường này là bắt buộc")
      .min(8, "Mật khẩu phải dài tối tiểu 8 ký tự")
      .max(16, "Mật khẩu dài tối đa 16 ký tự"),
    confirmPassword: Yup.string()
      .required("Trường này là bắt buộc")
      .oneOf([Yup.ref("password")], "Mật khẩu không trùng khớp"),
  });
  const resetHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put("/api/auth/reset", {
        user_id,
        password,
      });
      let options = {
        redirect: false,
        name: data.name,
        password: password,
      };
      await signIn("credentials", options);
      // setError("");
      // setLoading(false);
      window.location.reload(true);
      // Router.push("/");
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
        <div className={cx("forgot_title")}>ĐẶT LẠI MẬT KHẨU</div>
        <div className={cx("forgot_content")}>
          <Formik
            enableReinitialize
            initialValues={{
              password,
              confirmPassword,
            }}
            validationSchema={resetPasswordValidation}
            onSubmit={() => {
              resetHandler();
            }}
          >
            {(form) => (
              <Form>
                <Input
                  type="password"
                  name="password"
                  placeholder="Nhập mật khẩu mới"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Nhập lại mật khẩu mới"
                  autoComplete="off"
                  onChange={(e) => setConfirmPassword(e.target.value)}
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

export async function getServerSideProps(context) {
  const { query, req } = context;
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  const token = query.token;
  const user_id = jwt.verify(token, process.env.RESET_TOKEN_SECRET);
  return {
    props: {
      user_id: user_id.id,
    },
  };
}
