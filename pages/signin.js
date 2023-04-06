import classNames from "classnames/bind";
import { useState } from "react";
import Header from "@/components/header";
import styles from "../styles/SignIn.module.scss";
import { Formik, Form } from "formik";

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
  login_email: "",
  login_password: "",
};

export default function SignIn() {
  const [tabActive, setTabActive] = useState("tab_signin");
  const [user, setUser] = useState(initialValues);
  const {login_email, login_password} = user;
  const handleChange=(e)=>{
    const { name, value } = e.target
    setUser({...user, [name]:value})
  }
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
          <Formik>
            {(form) => (
              <Form>
                <input
                  type="text"
                  name="login_email"
                  placeholder="Nhập email hoặc tên đăng nhập"
                  className={cx("input_form")}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="login_password"
                  placeholder="Mật khẩu"
                  autoComplete="on"
                  className={cx("input_form")}
                  onChange={handleChange}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
