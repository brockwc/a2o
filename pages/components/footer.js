import styles from '../../styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.hoursLocation}>
        <p>8:30am-5:30pm</p>
        <p>Midtown, Sacramento</p>
      </div>
      <div className={styles.footerNav}>
        <ul>
          <li><a href="/contact" className={styles.navLink}>Contact Us</a></li>
          <li><a href="" className={styles.navLink}>Social</a></li>
        </ul>
      </div>
    </footer>
  )
}