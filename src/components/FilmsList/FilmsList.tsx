import { FC } from "react";
import { Film } from "../../store/actions/filmsActions";
import "./FilmsList.css";
import { FilmCard } from "./FilmCard";

interface FilmsListProps {
  films: Film[];
}

export const FilmsList: FC<FilmsListProps> = ({ films }) => {
  return (
    <div className="filmsListContainer">
      {films.map((film) => {
        const { episode_id, title, release_date } = film;
        return (
          <FilmCard
            key={episode_id}
            episode_id={episode_id}
            title={title}
            release_date={release_date}
          />
        );
      })}
    </div>
  );
};
