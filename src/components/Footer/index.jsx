import styles from './style.module.css'


import { InstagramLogo, LinkedinLogo, TiktokLogo } from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles['footer-infos']} >
        <div className={styles['footer-infos__itens']} >
          <strong>
            Sobre
          </strong>
          <ul>
            <li>
              <a>Quem somos</a>
            </li>
            <li>
              <a>News</a>
            </li>
            <li>
              <a>Material gratuito</a>
            </li>
            <li>
              <a>Mapa do site</a>
            </li>
          </ul>
        </div>
        <div className={styles['footer-infos__itens']} >
          <strong>
            Soluções
          </strong>
          <ul>
            <li>
              <a>Para Escolas</a>
            </li>
            <li>
              <a>Para Educadores</a>
            </li>
            <li>
              <a>Para Responsáveis</a>
            </li>

          </ul>
        </div>
        <div className={styles['footer-infos__itens']} >
          <strong>
            Recursos
          </strong>
          <ul>
            <li>
              <a>Blog
              </a>
            </li>
            <li>
              <a>News</a>
            </li>
            <li>
              <a>Alfabetização</a>
            </li>
            <li>
              <a>Ensino Médio</a>
            </li>
          </ul>
          <span>

          </span>
        </div>

      </div>
      <div className={styles['footer-form']} >
        <strong>Fale Conosco</strong>
        <form >
          <label htmlFor="fname">Nome</label>
          <input type="text" id="name" name="name" placeholder="" />

          <label htmlFor="phone">Telefone</label>
          <input type="text" id="phone" name="lastname" placeholder="" />

          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="lastname" placeholder="" />
          <label htmlFor="email">Mensagem</label>
          <textarea type="text" id="email" name="lastname" />

          <input type="submit" value="Enviar Mensagem" />
        </form>
      </div>

      <div className={styles.social}>
        <span>
          © 2024 Edukae
        </span>
        <ul className={styles['social-list']}>
          <li className='social-item'>
            <InstagramLogo size={32} />
          </li>
          <li className='social-item'>
            <LinkedinLogo size={32} />
          </li>
          <li className='social-item'>
            <TiktokLogo size={32} />
          </li>
        </ul>
      </div>
    </footer>
  )
}
