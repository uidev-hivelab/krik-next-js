import Top from './Top'
import Menu from './Menu'

import styles from './styles.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
      <Top/>
      <Menu/>
    </div>
  )
}
