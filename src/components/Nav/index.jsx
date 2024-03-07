import styles from './styles.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav} >
      <ul className={styles['nav-itens']}>
        <li>
          <a className={styles['nav-link']} href=''>
            Produtos
          </a>
        </li>
        <li>
          <a className={styles['nav-link']} href=''>
            Conteúdos
          </a>
        </li>
        <li>
          <a className={styles['nav-link']} href=''>
            Metedologia
          </a>
        </li>
        <li>
          <a className={styles['nav-link']} href=''>
            Sobre Nós
          </a>
        </li>
      </ul>
    </nav>
  )
}
