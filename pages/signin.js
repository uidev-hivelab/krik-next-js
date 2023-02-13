import classNames from "classnames/bind";

import Header from '@/components/header';
import styles from '@/styles/SignIn.module.scss';

const cx = classNames.bind(styles);

export default function SignIn() {
  return (
    <>
      <Header className='box_shadow'/>
      <div className={cx('form')}>
        
      </div>
    </>
  )
}