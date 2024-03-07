import styles from './styles.module.css'

export default function Technologies() {
  return (
    <section className={styles.container}>
      <div className={styles['image-container']} >
        imagem
      </div>
      <div className={styles['technologies-description']}>
        <h3 className={styles['technologies-description__title']}>
          Tecnologias e Metodologia
        </h3>
        <ul className={styles['technologies-description__list']}>
          <li>Educação Digital</li>
          <li>Orientação de Carreira</li>
          <li>Diversidade e Inclusão</li>
        </ul>
      </div>
    </section>
  )
}
