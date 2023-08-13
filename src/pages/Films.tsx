import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilmsState } from "../store/reducers";
import { fetchFilms } from "../store/api";
import "./Films.css";

export const Films: FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: { films: FilmsState }) => state);
  const { films, loading, error } = state.films;
  console.log(films);

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
      <ul>
        {films.map((film) => (
          <li key={film.episode_id}>
            <h2>{film.title}</h2>
            <p>Release date: {film.release_date}</p>
            <button>show people</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
