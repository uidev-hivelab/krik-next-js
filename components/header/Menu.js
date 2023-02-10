import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { BsSearch } from "react-icons/bs";

const cx = classNames.bind(styles);

export default function Menu() {
  return (
    <div className={cx('main_menu')}>
      <h1 className={cx('logo')}>
        <Link href="/">
          <img src="../../../img/logo.png" />
          <span className="blind">KRIK</span>
        </Link>
      </h1>
      <nav className={cx('nav')}>
        <ul className={cx('nav_lst')}>
          <li className={cx('nav_item')}>
            <Link href="/shirt">
              <span>Áo nam</span>
            </Link>
          </li>
          <li className={cx('nav_item')}>
            <Link href="paints">
              <span>Quần nam</span>
            </Link>
          </li>
          <li className={cx('nav_item')}>
            <Link href="/accessory">
              <span>Phụ kiện</span>
            </Link>
          </li>
          <li className={cx('nav_item')}>
            <Link href="/album">
              <span>Album</span>
            </Link>
          </li>
          <li className={cx('nav_item')}>
            <Link href="/new">
              <span>Tin tức</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={cx('search')}>
        <input type='text' className={cx('input_control')} placeholder="Tìm kiếm..."/>
        <button type="button" className={cx('btn','btn_search')}><BsSearch/></button>
      </div>
    </div>
  );
}
