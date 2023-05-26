import s from './ActorPage.module.scss'
import Image from "next/image";
import testPic from '../../../../public/img/test_actor.jpg'
import {ActorPageFilm, filmsType} from "@/components/common/ActorPageFilm/ActorPageFilm";

type actorType = {
  name: string
  eng_name: string
  info: string
  films: filmsType[]
}


export const ActorPage = (props: actorType) => {
  return (
    <div className={s.container}>

      <div className={s.actorPage__wrapper}>
        <div>
          <Image
            className={s.actorPage__img}
            width={100}
            height={120}
            src={testPic}
            alt='mobile png'/>
        </div>
        <h1>{props.name}</h1>
        <h4>{props.eng_name}</h4>
        <br/>
        <div>
          <span>{props.info}</span>
        </div>

        <section>
          <h3>Полная биография <span>53 фильма</span></h3>
          <span>Все</span>
          <hr/>
          {props.films.map(m => {
            return <ActorPageFilm
              key={m.id}
              name={m.name}
              year={m.year}
              rating={m.rating}
              img={m.img}
            />
          })}

        </section>
      </div>


    </div>
  )
}