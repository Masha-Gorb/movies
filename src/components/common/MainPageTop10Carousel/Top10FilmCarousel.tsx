import s from './Top10FilmCarousel.module.scss'
import {Top10FilmCard} from "@/components/common/MainPageTop10Carousel/Top10FilmCard";


const top10Films = [
  {poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b383f0-400b-4314-8c93-a08f85f696cf/1920x',
  rating: 1},
  {poster: 'https://shop-cdn1-2.vigbo.tech/shops/73592/products/21021566/images/2-bfe087c8a113f42ee63cb6814d38c1f4.jpg',
    rating: 2},
  {poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b383f0-400b-4314-8c93-a08f85f696cf/1920x',
    rating: 3},
  {poster: 'https://cdn.leroymerlin.ru/lmru/image/upload/v1607670947/lmcode/mHhT2rUG_EK9nbqNmE3S3A/90009040.jpg',
    rating: 4},
  {poster: 'https://static.insales-cdn.com/images/products/1/1513/373589481/you_are_not_alone_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg',
    rating: 5},
  {poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b383f0-400b-4314-8c93-a08f85f696cf/1920x',
    rating: 6},
  {poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b383f0-400b-4314-8c93-a08f85f696cf/1920x',
    rating: 7},
  {poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b383f0-400b-4314-8c93-a08f85f696cf/1920x',
    rating: 8},
  {poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b383f0-400b-4314-8c93-a08f85f696cf/1920x',
    rating: 9},
  {poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b383f0-400b-4314-8c93-a08f85f696cf/1920x',
    rating: 10},
];

const items = top10Films.map((film) => (
  <Top10FilmCard poster={film.poster}
                 key={film.rating}
                 rating={film.rating}
  />
))

const Top10FilmCarousel = ({children}) => {
  return (
    <div className={s.carousel}>
      <div className={s.carousel__inner}>
        {children}
      </div>
    </div>
  )
}

export const TestGallery = () => {
  return (
    <div>
      <div className={s.horizontalCenter}>
        <Top10FilmCarousel>{items}</Top10FilmCarousel>
      </div>
    </div>
  )
}