import { FC } from "react";
import { useDispatch } from "react-redux";
import { selectFilm } from "../../store/actions/filmsActions";
import "./FilmCard.css";

interface FilmContainerProp {
  episodeId: number;
  title: string;
  releaseDate: string;
}

export const FilmCard: FC<FilmContainerProp> = ({
  episodeId,
  title,
  releaseDate,
}) => {
  const dispatch = useDispatch();

  return (
    <div key={episodeId} className="filmCard">
      <h2>{title}</h2>
      <p>Release date: {releaseDate}</p>
      <button
        className="button"
        onClick={() => dispatch(selectFilm(episodeId))}
      >
        show people
      </button>
      <h3 className={"episodeId"}>Episode {episodeId}</h3>
    </div>
  );
};
