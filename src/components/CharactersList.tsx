import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CharactersState } from "../store/reducers/charactersReducer";
import { fetchCharacters } from "../api/api";

interface CharactersListProps {
  charactersList: string[];
}

export const CharactersList: FC<CharactersListProps> = ({ charactersList }) => {
  const dispatch = useDispatch();
  const state = useSelector((state: { characters: CharactersState }) => state);
  const { characters, loading, error } = state.characters;

  useEffect(() => {
    fetchCharacters(dispatch, charactersList);
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

  console.log(characters);

  return <div>Characters </div>;
};
