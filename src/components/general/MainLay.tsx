
import Head from 'next/head'
import { siteName } from '@/config'
import { Header } from '@/components/general/Header'
import styles from '@/styles/general/MainLay.module.scss'

interface MainLayProps {
  children: JSX.Element | JSX.Element[],
  title?: string
}

export function MainLay({ children, title }: MainLayProps) {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} | ${siteName}` : siteName}
        </title>
      </Head>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        footer
      </footer>
    </>
  )
}