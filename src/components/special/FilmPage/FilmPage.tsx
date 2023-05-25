
import {useRouter} from 'next/router';
import {useAppSelector} from '@/store';
import {ReqStatus} from '@/units/status';
import {strlang} from '@/units/lang';
import {MainLayout} from '@/components/layouts/MainLayout';
import {MessagePage} from '@/components/general/MessagePage';
import {MessageBox} from '@/components/common/MessageBox';
import {LoadingBox} from '@/components/common/LoadingBox';
import css from './FilmPage.module.scss';

export function FilmPage() {
  
  const router = useRouter();
  const lang = useAppSelector(state => state.settings.lang);
  const filmPage = useAppSelector(state => state.filmPage);
  const {reqStatus, film} = filmPage;

  console.log('reqStatus:', reqStatus)

  let title = '';
  let content = <></>;

  switch (reqStatus) {
    case ReqStatus.OK: {
      title = film.title;
      content = (
        <>
          <h1>{film.title}</h1>

          <div className={css['countries']}>
            { strlang( 
                film.countries.length > 1 ? 'FILM_COUNTRIES' : 'FILM_COUNTRY', 
                lang
              ) + ': ' 
            }
            { film.countries.map((country, idx) =>
                <span key={country.id} className={css['country']}>
                  { (idx > 0 ? ', ': '') + country.name }
                </span>
              )
            }
          </div>

          <div className={css['genres']}>
            { strlang( 
                film.genres.length > 1 ? 'FILM_GENRES' : 'FILM_GENRE', 
                lang
              ) + ': ' 
            }
            { film.genres.map((genre, idx) =>
                <span key={genre.id} className={css['genre']}>
                  { (idx > 0 ? ', ': '') + genre.name }
                </span>
              )
            }
          </div>
        </>
      )
    } 
    break;
    case ReqStatus.LOADING: {
      content = (
        <LoadingBox />
      )
    } 
    break;
    case ReqStatus.ERROR: {
      content = (
        <MessageBox type={'ERROR'} title={strlang('ERROR', lang)} />
      )
    } 
    break;
    case ReqStatus.NOT_FOUND: {
      return (
        <MessagePage type={'ERROR'} title={strlang('NOT_FOUND', lang)} />
      )
    } 
  }

  const pageEnv = {
    title,
    navStack: [{url: router.asPath, text: title}],
    description: 'Film lorem ipsum dolor sit',
    keywords: 'film, lorem, ipsum, dolor'
  }

  return (
    <MainLayout pageEnv={pageEnv}>
      {content}
    </MainLayout>
  )
}