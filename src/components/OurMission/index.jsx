import styles from './style.module.css'

export default function OurMission() {
  return (
    <section className={styles['our-mission']}>
      <div className={styles['our-mission--container']}>
        <h3 className={styles['our-mission--title']} >O que fazemos </h3>
        <p className={styles['our-mission--description']} >
          Auxiliar os jovens a descobrir suas paixões e encontrar o direcionamento adequado é uma das nossas principais prioridades. Sendo assim, nossa plataforma disponibiliza trilhas personalizadas com base nos insights dos educadores, oferecendo aos alunos abordagens inovadoras para a exploração vocacional, dados sobre diversas carreiras e oportunidades de experiências práticas
        </p>
      </div>
    </section>
  )
}
