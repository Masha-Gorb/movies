
import Head from 'next/head'
import { siteName } from '@/config'
import { Header } from '@/components/general/Header/Header'
import styles from './MainLayout.module.scss'
import {MainPage} from "@/components/units/MainPage/MainPage";
import {Footer} from "@/components/general/Footer/Footer";

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[],
  title?: string
}

export function MainLayout({ children, title }: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} | ${siteName}` : siteName}
        </title>
      </Head>

      <div className={styles.mainLayout__background}>
        <header>
          <Header />
        </header>

        <main>
          {/*{children}*/}
          <MainPage/>
        </main>

        <footer>
          <Footer/>
        </footer>
      </div>


    </>
  )
}