import Link from "next/link";
import styles from "./styles.module.scss";

export default function Menu() {
  return (
    <div className={styles.main_menu}>
      <h1 className={styles.logo}>
        <Link href="/">
          <img src="../../../img/logo.png" />
        </Link>
      </h1>
      <nav className={styles.nav}>
        <ul className={styles.nav_lst}>
          <li className={styles.nav_item}>
            <Link href="/shirt">
              <span>Áo nam</span>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="paints">
              <span>Quần nam</span>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="/accessory">
              <span>Phụ kiện</span>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="/album">
              <span>Album</span>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="/new">
              <span>Tin tức</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
