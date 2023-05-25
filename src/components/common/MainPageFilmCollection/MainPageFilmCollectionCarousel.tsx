import s from "@/components/common/MainPageFilmCollection/MainPageFilmCollectionCarousel.module.scss";
import {FilmCollectionCard} from "@/components/common/MainPageFilmCollection/FilmCollectionCard";

const filmCollectionFilms = [
  {poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b383f0-400b-4314-8c93-a08f85f696cf/1920x',
    status: 'Бесплатно', title: 'title1', id: 1},
  {poster: 'https://shop-cdn1-2.vigbo.tech/shops/73592/products/21021566/images/2-bfe087c8a113f42ee63cb6814d38c1f4.jpg',
    status: 'Подписка', title: 'title2', id: 18},
  {poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b383f0-400b-4314-8c93-a08f85f696cf/1920x',
    status: 'Подписка', title: 'title3', id: 17},
  {poster: 'https://cdn.leroymerlin.ru/lmru/image/upload/v1607670947/lmcode/mHhT2rUG_EK9nbqNmE3S3A/90009040.jpg',
    status: 'Бесплатно', title: 'title4', id: 16},
  {poster: 'https://static.insales-cdn.com/images/products/1/1513/373589481/you_are_not_alone_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg',
    status: 'Подписка', title: 'title5', id: 15},
  {poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b383f0-400b-4314-8c93-a08f85f696cf/1920x',
    status: 'Подписка', title: 'title6', id: 14},
  {poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b383f0-400b-4314-8c93-a08f85f696cf/1920x',
    status: 'Бесплатно', title: 'title7', id: 13},
  {poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b383f0-400b-4314-8c93-a08f85f696cf/1920x',
    status: 'Бесплатно', title: 'title8', id: 12},
  {poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b383f0-400b-4314-8c93-a08f85f696cf/1920x',
    status: 'Бесплатно', title: 'title9', id: 11},
  {poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b383f0-400b-4314-8c93-a08f85f696cf/1920x',
    status: 'Бесплатно', title: 'title10', id: 10},
];

const items = filmCollectionFilms.map((film) => (
  <FilmCollectionCard poster={film.poster}
                 key={film.id}
                 status={film.status}
                 title={film.title}
  />
))

const FilmCollectionCarousel = ({children}) => {
  return (
    <div className={s.carousel}>
      <div className={s.carousel__inner}>
        {children}
      </div>
    </div>
  )
}

export const FilmCollection = () => {
  return (
    <div>
      <div className={s.horizontalCenter}>
        <FilmCollectionCarousel>{items}</FilmCollectionCarousel>
      </div>
    </div>
  )
}