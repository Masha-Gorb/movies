
import Head from 'next/head';
import {useAppSelector} from '@/store';
import {Header} from '@/components/general/Header';
import {Footer} from '@/components/general/Footer';
import {MainPage} from "@/components/units/MainPage/MainPage";
import {FilmProfile} from "@/components/units/FilmProfile/FilmProfile";
import {ActorPage} from "@/components/units/ActorPage/ActorPage";
import {actors, films} from "@/components/mockData";

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[]
}

export function MainLayout({children}: MainLayoutProps) {

  const {title, navStack} = useAppSelector(state => state.pageEnv);
//подставила вместо {children} страницу чтобы видеть верстку
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div id='page-wrapper'>
        <div id='page-content'>
          <header className='page-header'>
            <Header />
          </header>
          <main className='page-main'>
            {/*{children}*/}
            {/*<MainPage/>*/}
            <FilmProfile films={films} />
            {/*<ActorPage*/}
            {/*  name={actors[0].name}*/}
            {/*  eng_name={actors[0].eng_name}*/}
            {/*  info={actors[0].info}*/}
            {/*  films={actors[0].films}*/}
            {/*/>*/}
          </main>
          <footer className='page-footer'>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  )
}