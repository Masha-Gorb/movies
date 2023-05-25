
// import {useAppSelector} from '@/store';
// import {strlang} from '@/units/lang';
// import styles from './Footer.module.scss'
//
// export function Footer() {
//
//   const lang = useAppSelector(state => state.settings.lang);
//
//   return (
//     <div className={styles['footer']}>
//       <div>{strlang('FOOTER_SOME_TEXT', lang)}</div>

import styles from './Footer.module.scss'
import global from "@/styles/global.module.scss";

export function Footer() {
  return (
    <div className={global.container}>
      <div className={styles.footer}>
        <nav className={styles.footer__nav}>
          <div className={styles.footer__navBlock}>
            <h4>О нас</h4>
            <ul>
              <li><a href={'https://corp.ivi.ru/'}>О компании</a></li>
              <li><a href={'https://corp.ivi.ru/career/#career-vacancy-block'}>Вакансии</a></li>
              <li><a href={'https://www.ivi.ru/pages/beta/'}>Программа бета-тестирования</a></li>
              <li><a href={'https://www.ivi.ru/info/partners'}>Информация для партнеров</a></li>
              <li><a href={'https://corp.ivi.ru/advertisers/'}>Размещение рекламы</a></li>
              <li><a href={'https://www.ivi.ru/info/agreement'}>Пользовательское соглашение</a></li>
              <li><a href={'https://www.ivi.ru/info/confidential'}>Политика конфиденциальности</a></li>
              <li><a href={'https://www.ivi.ru/info/goryachaya-liniya-komplaens'}>Комплаенс</a></li>
            </ul>
          </div>
          <div className={styles.footer__navBlock}>
            <h4>Разделы</h4>
            <ul>
              <li><a>Мой Иви</a></li>
              <li><a href={'https://www.ivi.ru/new'}>Что нового</a></li>
              {/*<li><Link href="/film/1">Фильмы</Link></li>*/}
              <li><a href={'https://www.ivi.ru/series'}>Сериалы</a></li>
              <li><a href={'https://www.ivi.ru/animation'}>Мультфильмы</a></li>
              <li><a href={'https://www.ivi.ru/tvplus'}>TV+</a></li>
              <li><a href={'https://www.ivi.ru/goodmovies'}>Что посмотреть</a></li>
              <li><a href={'https://www.ivi.ru/cert'}>Активация сертификата</a></li>
            </ul>
          </div>
          <div className={styles.footer__navBlock}>
            <h4>Служба поддержки</h4>
            <p>Мы всегда готовы вам помочь.</p>
            <p>Наши операторы онлайн 24/7</p>

            <div className={styles.footer__supportButtonChat}>
              <button>
                <a href={'https://www.ivi.ru/profile'}>
                  Написать в чате
                </a>
              </button>
              <div>
                <button>
                  email
                </button>
                <button>
                  call
                </button>
              </div>
            </div>

            <div className={styles.footer__ask}>
              <a
                href={'https://ask.ivi.ru/?_gl=1*1yghupw*_ga*NjY4MTA0NzI1LjE2ODE4NTA3NzA.*_ga_GETQ4387MJ*MTY4MzQzODEyMi4xMi4xLjE2ODM0NDA5NTguNjAuMC4w'}>
                ask.ivi.ru
              </a>
              <p>Ответы на вопросы</p>
            </div>

          </div>

          <div className={styles.footer__navBlockWidget}>
            <div className={styles.footerWidget__iconSection}>
              icon
            </div>
            <p><a>Смотрите фильмы, сериалы и мультфильмы без рекламы</a></p>
            <div>(сделать модалку)</div>
          </div>

        </nav>

        <div className={styles.footer__bottom}>
          <div className={styles.footer__social}>
            <div className={styles.footer__socialDevices}>
              <button>
                <a href={'https://apps.apple.com/RU/app/id455705533?mt=8'}>
                  <div>Загрузить в</div>
                  <div><b>App store</b></div>
                </a>
              </button>

              <button>
                <a href={'https://go.onelink.me/app/devicesAndroid'}>
                  <div>Доступно в</div>
                  <div><b>Google Play</b></div>
                </a>
              </button>

              <button>
                <a href={'https://www.ivi.ru/pages/tvsmart/'}>
                  <div>Смотрите на</div>
                  <div><b>Smart TV</b></div>
                </a>
              </button>

              <button>
                <a href={'https://www.ivi.ru/devices'}>
                  <div><b>Все устройства</b></div>
                </a>
              </button>
            </div>

            <div className={styles.footer__copyright}>
              <div>© 2023 ООО «Иви.ру»</div>
              <div>HBO ® and related service marks are the property of Home Box Office, Inc</div>
            </div>

          </div>

          <div className={styles.footer__socialLinks}>
            <button>
              <a href={'https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e'}>
              vk
            </a>
            </button>

            <button>
              <a href={'https://ok.ru/ivi.ru'}>
                ok
              </a>
            </button>
            <button>
              <a href={'https://twitter.com/ivi_ru'}>
                tw
              </a>
            </button>
            <button>
              <a href={'https://invite.viber.com/?g2=AQAN5HwJ109AW0tMEtqcQ1MwRvpATF2umOpstVEvZ4phfQicwxYucW5izsa0J5qi&lang=en'}>
                vib
              </a>
            </button>
            <button>
              <a href={'https://www.linkedin.com/company/2543415/'}>
                lin
              </a>
            </button>
            <button>
              <a href={'https://t.me/official_iviru'}>
                tg
              </a>
            </button>
          </div>
        </div>
      </div>
     </div>
  )
}