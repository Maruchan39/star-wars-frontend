import { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilmsState } from "../../store/reducers/filmsReducer";
import { fetchFilms } from "../../api/api";
import { FilmsList } from "../../components/FilmsList/FilmsList";
import { CharactersList } from "../../components/CharactersList/CharactersList";
import "./Films.css";

export const Films: FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: { films: FilmsState }) => state);
  const { films, loading, error, selectedFilm } = state.films;
  const charactersList = useMemo(
    () =>
      films.find((film) => film.episode_id === selectedFilm)?.characters ||
      null,
    [selectedFilm, films]
  );
  console.log(charactersList);

  useEffect(() => {
    fetchFilms(dispatch);
  }, [dispatch]);

  useEffect(() => {}, [selectedFilm]);

  if (loading) {
    return (
      <div className="films">
        <p>Loading...</p>
      </div>
    );
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
