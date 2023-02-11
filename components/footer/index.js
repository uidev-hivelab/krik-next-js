import classNames from 'classnames/bind';

import Social from './Social';
import FooterLink from './FooterLink';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles)

export default function Footer() {
  return (
    <footer className={cx('footer')}>
      <Social/>
      <FooterLink/>
    </footer>
  )
}