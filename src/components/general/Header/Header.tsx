
import {PageEnv} from '@/units/page-env';
import {MainMenu} from '@/components/general/MainMenu';
import {UserMenuTray} from '@/components/general/UserMenuTray';
import {Navline} from '@/components/general/Navline';
import styles from './Header.module.scss';

interface HeaderProps {
  pageEnv: PageEnv,
}

export function Header({pageEnv}: HeaderProps) {
  return (
    <div className={styles['header']}>
      <div>header</div>
      <div><MainMenu /></div>
      <div><UserMenuTray /></div>
      <div><Navline pageEnv={pageEnv} /></div>
    </div>
  )
}