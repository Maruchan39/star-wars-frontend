import { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilmsState } from "../../store/reducers/filmsReducer";
import { fetchFilms } from "../../api/api";
import { FilmsList } from "../../components";
import { CharactersList } from "../../components";
import { LoadingSpinner } from "../../components";
import "./Films.css";

export const Films: FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: { films: FilmsState }) => state);
  const { films, loading, error, selectedFilm } = state.films;
  const charactersList = useMemo(
    () =>
      films.find((film) => film.episodeId === selectedFilm)?.characters || [],
    [selectedFilm, films]
  );

  useEffect(() => {
    films.length === 0 && fetchFilms(dispatch);
  }, [dispatch, films.length]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="films">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="films">
      <FilmsList films={films} />
      <CharactersList charactersList={charactersList} />
    </div>
  );
};
