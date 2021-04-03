import Image from 'react-bootstrap/Image'

import styles from '../../styles/Header.module.scss'
import bannerStyles from '../../styles/Banner.module.scss'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href="/">
            <Image src="/logo_temp.png" alt="Acorn to Oak"/>
          </a>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="/about" className={styles.navLink}>About</a></li>
            <li><a href="/admissions" className={styles.navLink}>Admissions</a></li>
            <li><a href="/classrooms" className={styles.navLink}>Classrooms</a></li>
            <li><a href="/contact" className={styles.navLink}>Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <div className={bannerStyles.banner}>
        <h3>Opening Summer 2021</h3>
      </div>
    </>
  );
}