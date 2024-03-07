import styles from './style.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header-container']}>
        <div className={styles['header-logo']}>
          Edukae
        </div>
        <button className={styles['header-login']}>
          Login
        </button>
      </div>
    </header>
  )
}
