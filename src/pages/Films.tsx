import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilmsState } from "../store/reducers";
import { fetchFilms } from "../store/api";
import "./Films.css";

export const Films: FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: { films: FilmsState }) => state);
  const { loading, error } = state.films;

  useEffect(() => {
    fetchFilms(dispatch);
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="films">
      <h1>Films</h1>
    </div>
  );
};
