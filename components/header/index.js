import classNames from "classnames/bind";

import Top from './Top'
import Menu from './Menu'
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

export default function Header({className = ''}) {
  return (
    <div className={cx('header',`${className}`)}>
      <Top/>
      <Menu/>
    </div>
  )
}
