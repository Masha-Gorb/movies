import s from './ActorPageFilm.module.scss'

export type filmsType = {
  id: string
  name: string
  rating: string
  year: string
  img: string
}


export const ActorPageFilm = (props: filmsType) => {
  return (
    <div className={s.film__container}>

      <div className={s.film__info}>
        <div className={s.film__img}>
          film image
        </div>
        <div>
          <span>{props.year}</span>
          <br/>
          <span>{props.name}</span>
          <br/>
          <span>Рейтинг Иви <span>{props.rating}</span></span>
        </div>

      </div>

      <button>Подробнее</button>

    </div>
  )
}