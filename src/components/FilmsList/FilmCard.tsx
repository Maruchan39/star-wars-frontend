import { FC } from "react";
import { useDispatch } from "react-redux";
import { Film } from "../../store/actions/filmsActions";
import { selectFilm } from "../../store/actions/filmsActions";
import "./FilmCard.css";

interface FilmContainerProp {
  film: Film;
}

export const FilmCard: FC<FilmContainerProp> = ({ film }) => {
  const dispatch = useDispatch();

  const { episode_id, title, release_date } = film;
  return (
    <div key={episode_id} className="film">
      <h2>{title}</h2>
      <p>Release date: {release_date}</p>
      <button onClick={() => dispatch(selectFilm(episode_id))}>
        show people
      </button>
    </div>
  );
};
