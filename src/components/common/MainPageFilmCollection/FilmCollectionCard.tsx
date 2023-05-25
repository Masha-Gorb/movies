import s from "@/components/common/MainPageFilmCollection/FilmCollectionCard.module.scss";

type PropsType = {
  poster: string
  key: number
  status: string
  title: string
}

export const FilmCollectionCard = (props: PropsType) => {

  return (
    <div>
      <div className={s.item__container}>
        <a className={s.item}
           style={{backgroundImage: `url(${props.poster})`}}
           key={props.key}>

          <div className={s.filmCard__info}>
            <div className={s.hide}>
              <i><b>title</b></i>
            </div>

          </div>
        </a>
      </div>

      <div className={s.filmCard__title}>
        <span>{props.title}</span>
        <br/>
        <span>{props.status}</span>
      </div>

    </div>

  )
}