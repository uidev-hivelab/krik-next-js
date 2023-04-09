import classNames from "classnames/bind";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { getProviders, signIn } from "next-auth/react";
import styles from "../styles/SignIn.module.scss";
import Header from "@/components/header";
import Input from "@/components/input";
import Button from "../components/button";

const cx = classNames.bind(styles);
const nameTab = [
  {
    id: 1,
    name: "ĐĂNG NHẬP",
    target: "tab_signin",
  },
  {
    id: 2,
    name: "ĐĂNG KÝ",
    target: "tab_signup",
  },
];
const initialValues = {
  login_name: "",
  login_password: "",
  full_name: "",
  email: "",
  password: "",
  retype_password: "",
};

export default function SignIn({ providers }) {
  const [tabActive, setTabActive] = useState("tab_signin");
  const [user, setUser] = useState(initialValues);
  const {
    login_name,
    login_password,
    full_name,
    email,
    password,
    retype_password,
  } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const loginValidation = Yup.object({
    login_name: Yup.string().required("Trường này là bắt buộc"),
    login_password: Yup.string().required("Trường này là bắt buộc"),
  });
  const registerValidation = Yup.object({
    full_name: Yup.string()
      .required("Trường này là bắt buộc")
      .min(3, "Tên đăng nhập phải dài hơn 3 ký tự")
      .max(16, "Tên đăng nhập phải ngắn hơn 16 ký tự")
      .matches(/^[a-zA-Z0-9]/, "Tên đăng nhập không chứa ký tự đặc biệt"),
    email: Yup.string()
      .required("Trường này là bắt buộc")
      .email("Email không hợp lệ"),
    password: Yup.string()
      .required("Trường này là bắt buộc")
      .min(8, "Mật khẩu phải dài hơn 8 ký tự")
      .max(16, "Mật khẩu phải ngắn hơn 16 ký tự"),
    retype_password: Yup.string()
      .required("Trường này là bắt buộc")
      .oneOf([Yup.ref("password")], "Mật khẩu không trùng khớp"),
  });
  return (
    <>
      <Header className="box_shadow" />
      <div className={cx("tab_wrap")}>
        <div className={cx("tab_control")}>
          {nameTab &&
            nameTab.map((tab, index) => (
              <button
                key={index}
                type="button"
                className={cx(
                  "tab_btn",
                  tab.target === tabActive ? "tab_active" : ""
                )}
                onClick={() => setTabActive(tab.target)}
              >
                {tab.name}
              </button>
            ))}
        </div>
        <div className={cx("tab_content")}>
          {tabActive === "tab_signin" ? (
            <>
              <Formik
                enableReinitialize
                initialValues={{
                  login_name,
                  login_password,
                  full_name,
                  email,
                  password,
                  retype_password,
                }}
                validationSchema={loginValidation}
              >
                {(form) => (
                  <Form>
                    <Input
                      type="text"
                      name="login_name"
                      placeholder="Tên đăng nhập"
                      onChange={handleChange}
                    />
                    <Input
                      type="password"
                      name="login_password"
                      placeholder="Mật khẩu"
                      autoComplete="on"
                      onChange={handleChange}
                    />
                    <div className={cx("btn_wrap")}></div>
                    <Button type="text" text="Đăng nhập" classes="btn_login" />
                  </Form>
                )}
              </Formik>
              <div className={cx("form_control")}>
                <Link href="/forgot" className={cx("link_forgot")}>
                  Quên mật khẩu?
                </Link>
                <p className={cx("login_with")}>Hoặc đăng nhập với</p>
                <div className={cx("login_list")}>
                  {providers.map((provider) => (
                    <Button
                      key={provider.id}
                      type="button"
                      text={`Đăng nhập bằng ` + provider.name}
                      classes="btn_login_social"
                      icon={provider.id}
                      onClick={() => signIn(provider.id)}
                    />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <Formik
              enableReinitialize
              initialValues={{
                login_name,
                login_password,
                full_name,
                email,
                password,
                retype_password,
              }}
              validationSchema={registerValidation}
            >
              {(form) => (
                <Form>
                  <Input
                    type="text"
                    name="full_name"
                    placeholder="Tên đăng nhập"
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <Input
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  <Input
                    type="password"
                    name="retype_password"
                    placeholder="Nhập lại mật khẩu"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  <div className={cx("btn_wrap")}></div>
                  <Button type="submit" text="Đăng ký" classes="btn_sign_up" />
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = Object.values(await getProviders());
  return {
    props: { providers },
  };
}
