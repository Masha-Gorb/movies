import s from "@/components/common/MainPageTop10Carousel/Top10FilmCard.module.scss";


export const Top10FilmCard = (props: any) => {

  return (
    <div className={s.item__container}>
      <a className={s.item}
         style={{backgroundImage: `url(${props.poster})`}}
         key={props.key}>


          <div className={s.topFilmCard__rating}>
            <i><b>{props.rating}</b></i>
          </div>




      </a>
    </div>

    )
}