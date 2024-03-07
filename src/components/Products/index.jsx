
import styles from './styles.module.css'

export default function Products() {
  return (
    <section className={styles.products}>
      <div className={styles['product-card']}>
        <strong className={styles['product-card__title']}>Educação Digital</strong>
        <p className={styles['product-card__description']} >
          Sob medida para ajudar indivíduos a traçar caminhos profissionais bem-sucedidos. Nossos serviços de orientação abrangem a definição de metas, a preparação de currículos, o desenvolvimento de habilidades profissionais e o acesso a oportunidades de emprego relevantes. Estamos comprometidos em ajudar os jovens a descobrirem seus talentos para atingir seu potencial máximo em suas jornadas profissionais.
        </p>
      </div>
      <div className={styles['product-card']}>
        <strong className={styles['product-card__title']}>Orientação de Carreira </strong>
        <p className={styles['product-card__description']}>
          Sob medida para ajudar indivíduos a traçar caminhos profissionais bem-sucedidos. Nossos serviços de orientação abrangem a definição de metas, a preparação de currículos, o desenvolvimento de habilidades profissionais e o acesso a oportunidades de emprego relevantes. Estamos comprometidos em ajudar os jovens a descobrirem seus talentos para atingir seu potencial máximo em suas jornadas profissionais.
        </p>
      </div>
      <div className={styles['product-card']}>
        <strong className={styles['product-card__title']}>Diversidade e Inclusão </strong>
        <p className={styles['product-card__description']}>
          Estamos empenhados em promover uma educação que abrace a diversidade e promova a inclusão. Nossa plataforma oferece serviços e recursos que apoiam a acessibilidade, a igualdade de oportunidades e a inclusão de todos os alunos, independentemente de suas origens, habilidades ou necessidades. Trabalhamos para criar um ambiente educacional que valorize e celebre a diversidade, proporcionando a todos a oportunidade de aprender e crescer juntos.
        </p>
      </div>
    </section>
  )
}
