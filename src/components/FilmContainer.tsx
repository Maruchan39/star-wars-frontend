import { FC } from "react";
import { Film } from "../store/actions";
import "./FilmContainer.css";

interface FilmContainerProp {
  film: Film;
}

export const FilmContainer: FC<FilmContainerProp> = ({ film }) => {
  const { episode_id, title, release_date } = film;
  return (
    <div key={episode_id} className="film">
      <h2>{title}</h2>
      <p>Release date: {release_date}</p>
      <button>show people</button>
    </div>
  );
};
