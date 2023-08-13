import { FC } from "react";
import { Film } from "../store/actions";
import "./FilmsList.css";

interface FilmsListProps {
  films: Film[];
}

export const FilmsList: FC<FilmsListProps> = ({ films }) => {
  return (
    <div className="container">
      {films.map((film) => (
        <div key={film.episode_id} className="film">
          <h2>{film.title}</h2>
          <p>Release date: {film.release_date}</p>
          <button>show people</button>
        </div>
      ))}
    </div>
  );
};
