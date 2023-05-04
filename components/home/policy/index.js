import classNames from "classnames/bind";
import styles from "./Policy.module.scss";

const cx = classNames.bind(styles);
const policies = [
  {
    image: "../../../img/policy/return.webp",
    title: "Đổi trả trong vòng 5 ngày",
  },
  {
    image: "../../../img/policy/check.webp",
    title: "Kiểm tra hàng trước khi thanh toán",
  },
  {
    image: "../../../img/policy/delivery.webp",
    title: "Hỗ trợ ship cho đơn hàng từ 500K",
  },
];

export default function Policy() {
  return (
    <ul className={cx("policy_wrap")}>
      {policies.map((policy, index) => (
        <li key={index} className={cx("policy_item")}>
          <div className={cx("policy_img")}>
            <img className="img" src={policy.image} alt="" />
          </div>
          <p className={cx("policy_title")}>{policy.title}</p>
        </li>
      ))}
    </ul>
  );
}
