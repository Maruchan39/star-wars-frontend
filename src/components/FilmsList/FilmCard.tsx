import { FC } from "react";
import { useDispatch } from "react-redux";
import { selectFilm } from "../../store/actions/filmsActions";
import "./FilmCard.css";

interface FilmContainerProp {
  episode_id: number;
  title: string;
  release_date: string;
}

export const FilmCard: FC<FilmContainerProp> = ({
  episode_id,
  title,
  release_date,
}) => {
  const dispatch = useDispatch();

  return (
    <div key={episode_id} className="filmCard">
      <h2>{title}</h2>
      <p>Release date: {release_date}</p>
      <button
        className="button"
        onClick={() => dispatch(selectFilm(episode_id))}
      >
        show people
      </button>
      <h3 className={"episodeId"}>Episode {episode_id}</h3>
    </div>
  );
};
