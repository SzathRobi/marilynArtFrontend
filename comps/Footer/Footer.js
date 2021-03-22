import styles from "../../styles/footer/footer.module.css"

function Footer() {
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <p>rólunk</p>
        </li>
        <li className={styles.listItem}>
          <p>kapcsolat</p>
        </li>
        <li className={styles.listItem}>
          <p>FAQ</p>
        </li>
      </ul>    
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <p>valami</p>
        </li>
        <li className={styles.listItem}>
          <p>Privacy Policy</p>
        </li>
        <li className={styles.listItem}>
          <p>footer szöveg</p>
        </li>
      </ul>    
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <p>egyéb</p>
        </li>
        <li className={styles.listItem}>
          <p>webfejlesztés</p>
        </li>
      </ul>    
    </div>
  )
}

export default Footer
