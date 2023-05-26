import s from './FilmProfile.module.scss'
import {FilmCollection} from "@/components/common/MainPageFilmCollection/MainPageFilmCollectionCarousel";
import global from "@/styles/global.module.scss";
import mobile from '../../../../public/img/filmProfile__mobile.png'
import Image from 'next/image'
import {FilmProfileActors} from "@/components/common/FilmProfileActors/FilmProfileActors";


export const FilmProfile = () => {

  const actors = [
    {name: 'John', role: 'director'},
    {name: 'Jane', role: 'actress'},
    {name: 'Josh', role: 'actor'},
    {name: 'Mark', role: 'actor'},
    {name: 'Mia', role: 'actress'},
    {name: 'Lea', role: 'actress'},
  ]

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
          <h1>Блондинка в законе</h1>
          <h1>(Фильм 2001)</h1>

          <div className={s.cardInfo__smallText}>
            <a>2001</a>
            <span>1 ч. 35 мин.</span>
            <span>12+</span>
          </div>

          <div className={s.cardInfo__smallText}>
            <a>США </a>
            <a>Комедии </a>
            <a>Мелодрамы </a>
            <a>Зарубежные</a>
          </div>

          <div className={s.cardInfo__smallText}>
            <span>FullHD </span>
            <span>Sound:Рус/Eng </span>
            <span>Subs:Рус </span>
          </div>

          <div className={s.cardInfo__actors}>
            <div>rating</div>
            <div>actress1</div>
            <div>actor1</div>
            <div>actor2</div>
          </div>

          <div className={s.cardInfo__award}>
             Премия канала МТВ
          </div>

          <div className={s.cardInfo__description}>
            <p>
              Фильм, превративший актрису Риз Уизерспун в высокооплачиваемую голливудскую знаменитость – «Блондинка в законе» стала для двадцатипятилетней улыбчивой красавицы настоящим звёздным часом, как и для начинающего режиссёра Роберта Лукетича, после этой лёгкой романтической комедии неоднократно выдававшего не менее успешные картины («Если свекровь – монстр», «Голая правда», «Киллеры»). Вдохновляющая...
            </p>
          </div>

          <div className={s.cardInfo__award}>
            Рейтинг Иви
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
          {/*<FilmProfileActors actors={actors}/>*/}
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