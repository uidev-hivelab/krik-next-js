import classNames from "classnames/bind";
import Link from "next/link";

import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

const links = [
  {
    name: "Cách thức đặt hàng",
    href: "/",
  },
  {
    name: "Chính sách thành viên",
    href: "/",
  },
  {
    name: "Chính sách giao hàng",
    href: "/",
  },
  {
    name: "Quy định đổi trả",
    href: "/",
  },
  {
    name: "Hình thức thanh toán",
    href: "/",
  },
  {
    name: "Chính sách bảo mật",
    href: "/",
  },
  {
    name: "Chính sách xử lý khiếu nại",
    href: "/",
  },
  {
    name: "Chính sách kiểm hàng",
    href: "/",
  },
];

const stores = ['344 Cầu Giấy', '132 Cầu Giấy', '280-282 Nguyễn Trãi', '167 Chùa Bộc', '307H Bạch Mai', '23 Chùa Bộc', '209 Bạch Mai', '189 Phố Nhổn'];

const infos = [
  {
    title: 'Công ty TNHH KRIK Việt Nam',
    info: ''
  },
  {
    title: 'Địa chỉ:',
    info: 'Số 344 Cầu Giấy, Phường Dịch Vọng, Quận Cầu Giấy, Thành phố Hà Nội'
  },
  {
    title: 'Mã số doanh nghiệp:',
    info: '0108901419 do Sở kế hoạch và đầu tư thành phố Hà Nội cấp ngày 17/09/2019'
  },
  {
    title: 'Điện thoại:',
    info: '0356.688.339'
  },
  {
    title: 'Email:',
    info: 'quyluuxda@gmail.com'
  }
]

export default function FooterLink() {
  return (
    <div className={cx("footer_link")}>
      <div className={cx("group")}>
        <strong className={cx("title")}>Chính sách và quy định</strong>
        <ul className={cx("link")}>
          {links.map(link=>(
            <li className={cx("item")}>
              <Link href={link.href}>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={cx("group")}>
        <strong className={cx("title")}>Hệ thống cửa hàng</strong>
        <ul className={cx('store')}>
          {stores.map(store=>(
            <li className={cx('item')}>
              <span>{store}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={cx("group")}>
        <strong className={cx("title")}>Về chúng tôi</strong>
        <ul className={cx('about')}>
          {infos.map(info=>(
            <li className={cx("item")}>
                <strong>{info.title}</strong>
                &nbsp;
                <span>{info.info}</span>
              </li>
            ))}
        </ul>
        <img className={cx("ministry")} src="../../img/ministry.png" alt=""/>
      </div>
      <div className={cx("fan_page")}>
        <img src="../../img/fan_page.png" alt=""/>
      </div>
    </div>
  );
}
