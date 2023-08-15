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
        const { episodeId, title, releaseDate } = film;
        return (
          <FilmCard
            key={episodeId}
            episodeId={episodeId}
            title={title}
            releaseDate={releaseDate}
          />
        );
      })}
    </div>
  );
};
