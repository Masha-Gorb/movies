import s from './FilmProfile.module.scss'
import {FilmCollection} from "@/components/common/MainPageFilmCollection/MainPageFilmCollectionCarousel";
import global from "@/styles/global.module.scss";
import mobile from '../../../../public/img/filmProfile__mobile.png'
import Image from 'next/image'

type PropsType = {
  films: FilmPropsType[]
}

type FilmPropsType = {
  title: string
  prod_year: string
  duration_min: string
  age_limit: string
  film_description: string
  country: string
  ratingIvi: string
  awards: any[]
  genre: string[]
  roles: any[]
}

export const FilmProfile = (props: PropsType) => {
  return (
    <div className={global.container}>
      <div>Фильмы - Комедии</div>

      <div className={s.filmProfile__info}>
        <div className={s.filmProfile__player}>
          <div className={s.player__window}>
            insert video
          </div>
          <div className={s.player__userActions}>
            <div>
              <button>Вкл трейлер</button>
              <button>Избранное</button>
              <button>Share</button>
            </div>
            <button>Бесплатные фильмы</button>
          </div>
        </div>

        <div className={s.filmProfile__cardInfo}>
          <h1>{props.films[0].title}</h1>
          <h1>(Фильм {props.films[0].prod_year})</h1>

          <div className={s.cardInfo__smallText}>
            <a>{props.films[0].prod_year} </a>
            <span>{props.films[0].duration_min} </span>
            <span>{props.films[0].age_limit}</span>
          </div>

          <div className={s.cardInfo__smallText}>
            <a>{props.films[0].country} </a>
            <a>{props.films[0].genre[0]} </a>
            <a>{props.films[0].genre[1]} </a>
            <a>{props.films[0].genre[2]}</a>
          </div>

          <div className={s.cardInfo__smallText}>
            <span>FullHD </span>
            <span>Sound:Рус/Eng </span>
            <span>Subs:Рус </span>
          </div>

          <div className={s.cardInfo__actors}>
            <div>{props.films[0].ratingIvi}</div>
            <div>actress1</div>
            <div>actor1</div>
            <div>actor2</div>
          </div>

          <div className={s.cardInfo__award}>
            {props.films[0].awards[0].title}
          </div>

          <div className={s.cardInfo__description}>
            <p>{props.films[0].film_description}</p>
          </div>

          <div className={s.cardInfo__award}>
            Рейтинг Иви {props.films[0].ratingIvi}
          </div>
        </div>
      </div>

      <section className={s.main__collections}>
        <h3><a>С фильмом Блондинка в законе смотрят ›</a></h3>
        <FilmCollection/>
      </section>

      <section className={s.filmProfile__section}>
        <h3><a>Актеры и создатели</a></h3>
        <div className={s.creators__list}>
          {/*<FilmProfileActors actors={props.films[0].roles}/>*/}
          <a>
            <div>face</div>
            <span>Name 1</span>
            <br/>
            <span>director</span>
          </a>
          <a>
            <div>face</div>
            <span>Name 1</span>
            <br/>
            <span>director</span>
          </a>
          <a>
            <div>face</div>
            <span>Name 1</span>
            <br/>
            <span>director</span>
          </a>
          <a>
            <div>face</div>
            <span>Name 1</span>
            <br/>
            <span>director</span>
          </a>
          <a>
            <div>face</div>
            <span>Name 1</span>
            <br/>
            <span>director</span>
          </a>
          <a>
            <div>face</div>
            <span>Name 1</span>
            <br/>
            <span>director</span>
          </a>
          <a>
            <div>face</div>
            <span>Name 1</span>
            <br/>
            <span>director</span>
          </a>
          <a>
            <div>face</div>
            <span>Name 1</span>
            <br/>
            <span>director</span>
          </a>
          <a>
            <div>face</div>
            <span>Name 1</span>
            <br/>
            <span>director</span>
          </a>
          <a>
            <div>face</div>
            <span>Name 1</span>
            <br/>
            <span>director</span>
          </a>
          <a>
            <div>face</div>
            <span>Name 1</span>
            <br/>
            <span>director</span>
          </a>
          <a>
            <div>face</div>
            <span>Name 1</span>
            <br/>
            <span>director</span>
          </a>
          <a>
            <div>face</div>
            <span>Name 1</span>
            <br/>
            <span>director</span>
          </a>
        </div>
      </section>

      <section className={s.filmProfile__section}>
        <h3><a>Награды</a></h3>
        <div className={s.awards__cards}>
          <div className={s.awardsCards__card}>Золотой глобус</div>
          <div className={s.awardsCards__card}>Премия канала МТВ</div>
        </div>
      </section>

      <section className={s.filmProfile__comments}>
        <h3>Комментарии к фильму</h3>
        <div>О фильме title</div>
        <div>каруселька с комментариями</div>
      </section>

      <section className={s.filmProfile__mobile}>
          <div className={s.mobile__info}>
            <h3>Смотреть title на всех устройствах</h3>
            <p>
              Приложение доступно для скачивания на iOS, Android, SmartTV и приставках
            </p>
            <button>
              <a href={'https://www.ivi.ru/devices'}>
                Подключить устройства
              </a>
            </button>
          </div>
        <div>
          <Image className={s.filmProfile__mobilePng} src={mobile} alt={'mobile png'}/>
        </div>

      </section>

    </div>
  )
}