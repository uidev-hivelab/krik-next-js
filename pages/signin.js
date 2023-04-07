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
};

export default function SignIn({ providers }) {
  console.log(providers);
  const [tabActive, setTabActive] = useState("tab_signin");
  const [user, setUser] = useState(initialValues);
  const { login_name, login_password } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const loginValidation = Yup.object({
    login_name: Yup.string().required("*Trường này là bắt buộc"),
    login_password: Yup.string().required("*Trường này là bắt buộc"),
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
          {/* {tabActive === "tab_signin" ? "SignIn" : "Signup"} */}
          <Formik
            enableReinitialize
            initialValues={{
              login_name,
              login_password,
            }}
            validationSchema={loginValidation}
          >
            {(form) => (
              <Form>
                <Input
                  type="text"
                  name="login_name"
                  placeholder="Nhập email hoặc tên đăng nhập"
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
                  onClick={() => signIn(provider.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = Object.values(await getProviders());
  console.log(providers);
  return {
    props: { providers },
  };
}
