import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilmsState } from "../store/reducers";
import { fetchFilms } from "../api/api";
import { FilmsList } from "../components/FilmsList";
import "./Films.css";

export const Films: FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: { films: FilmsState }) => state);
  const { films, loading, error } = state.films;

  useEffect(() => {
    fetchFilms(dispatch);
  }, [dispatch]);

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
    </div>
  );
};
