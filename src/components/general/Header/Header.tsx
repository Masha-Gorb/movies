//
// import {MainMenu} from '@/components/general/MainMenu'
// import {UserMenuTray} from '@/components/general/UserMenuTray'
// import styles from './Header.module.scss'
import s from './Header.module.scss'
import Image from 'next/image'
import header__logo from '../../../../public/icons/iviHeaderLogo.svg'
import global from "@/styles/global.module.scss";
//
// export function Header() {
//   return (
//     <div className={styles['header']}>
//       <div>header</div>
//       <div><MainMenu /></div>
//       <div><UserMenuTray /></div>


export function Header() {
  return (
    <div className={global.container}>
      <div className={s.header}>

        <nav className={s.header__nav}>
          <a href={'https://www.ivi.ru/'}>
            <Image className={s.logo} src={header__logo} alt={'iviHeaderLogo'}/>
          </a>
          <ul>
            <li><a href={'https://www.ivi.ru/'}>Мой Иви</a></li>
            <li><a href={'https://www.ivi.ru/new'}>Что нового</a></li>
            {/*<li><Link>Фильмы</Link></li>*/}
            <li><a>Сериалы</a></li>
            <li><a>Мультфильмы</a></li>
            <li><a href={'https://www.ivi.ru/tvplus'}>TV+</a></li>
          </ul>
        </nav>

        <div className={s.header__profile}>
          <ul>
            <li>
              <button className={s.profile__btn}>
                <a
                  href={'https://www.ivi.ru/login?action=%2Fuser%2Fsubscription&buy=true&type=subscriptionChange&renew_period=2592000&subscription_id=6&redirect_url=%2F&from=top_menu'}>
                  Оплатить подписку
                </a>
              </button>
            </li>
            <li><a href={'https://www.ivi.ru/?ivi_search'}>Поиск</a></li>
            <li><a href={'https://www.ivi.ru/profile/pull_notifications'}>Notification</a></li>
            <li><a href={'https://www.ivi.ru/profile'}>Профиль</a></li>
          </ul>

        </div>
      </div>
    </div>
  )
}