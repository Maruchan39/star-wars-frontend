import { FC } from "react";
import { Film } from "../store/actions/filmsActions";
import "./FilmsList.css";
import { FilmContainer } from "./FilmContainer";

interface FilmsListProps {
  films: Film[];
}

export const FilmsList: FC<FilmsListProps> = ({ films }) => {
  return (
    <div className="container">
      {films.map((film) => (
        <FilmContainer film={film} />
      ))}
    </div>
  );
};
